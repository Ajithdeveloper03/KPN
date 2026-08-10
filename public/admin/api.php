<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

require_once 'auth.php';
require_once 'db.php'; 

$method = $_SERVER['REQUEST_METHOD'];


if ($method === 'POST' && isset($_GET['action']) && $_GET['action'] === 'login') {
    $input = json_decode(file_get_contents('php://input'), true);
    $username = trim($input['username'] ?? '');
    $password = $input['password'] ?? '';
    
    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD_HASH) {
        echo json_encode(["status" => "success", "token" => SECRET_TOKEN]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Invalid credentials"]);
    }
    exit;
}

// Handle GET requests (Public read access)
if ($method === 'GET') {
    // Both frontend (Next.js) and Admin need to read blogs.
    // If not logged in, we only return published info (for Next.js frontend).
    // If logged in, we can return more data if needed.
    
    try {
        if (isset($_GET['slug'])) {
            $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = ?");
            $stmt->execute([$_GET['slug']]);
            $blog = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($blog) {
                echo json_encode(["status" => "success", "data" => $blog]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Blog not found"]);
            }
        } else {
            // Get all blogs (ordered by latest)
            $stmt = $pdo->query("SELECT * FROM blogs ORDER BY created_at DESC");
            $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["status" => "success", "data" => $blogs]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Database error"]);
    }
    exit;
}

// ============================================================================
// ALL OPERATIONS BELOW REQUIRE ADMIN LOGIN TOKEN
// ============================================================================

require_login(); // Validates the Bearer token

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// POST: Create new blog
if ($method === 'POST') {
    try {
        $stmt = $pdo->prepare("INSERT INTO blogs (title, slug, category, author, read_time, image, content, builder_data, status, meta_title, meta_description, meta_keywords) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            
        $stmt->execute([
            $input['title'],
            $input['slug'],
            $input['category'],
            $input['author'],
            $input['read_time'],
            $input['image'],
            // Intentionally not using htmlspecialchars on content because it is raw HTML from the admin.
            // A more advanced setup would use HTMLPurifier here.
            $input['content'], 
            $input['builder_data'] ?? null,
            $input['status'] ?? 'published',
            $input['meta_title'],
            $input['meta_description'],
            $input['meta_keywords']
        ]);
        
        echo json_encode(["status" => "success", "id" => $pdo->lastInsertId()]);
    } catch (PDOException $e) {
        http_response_code(400);
        // Catch slug uniqueness error
        if ($e->getCode() == 23000) {
            echo json_encode(["error" => "Slug already exists. Please choose a unique URL."]);
        } else {
            echo json_encode(["error" => "Failed to create blog."]);
        }
    }
    exit;
}

// PUT: Update existing blog
if ($method === 'PUT') {
    try {
        $stmt = $pdo->prepare("UPDATE blogs SET 
            title = ?, slug = ?, category = ?, author = ?, read_time = ?, image = ?, content = ?, builder_data = ?, status = ?,
            meta_title = ?, meta_description = ?, meta_keywords = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?");
            
        $stmt->execute([
            $input['title'],
            $input['slug'],
            $input['category'],
            $input['author'],
            $input['read_time'],
            $input['image'],
            $input['content'],
            $input['builder_data'] ?? null,
            $input['status'] ?? 'published',
            $input['meta_title'],
            $input['meta_description'],
            $input['meta_keywords'],
            $input['id']
        ]);
        
        echo json_encode(["status" => "success"]);
    } catch (PDOException $e) {
        http_response_code(400);
        if ($e->getCode() == 23000) {
            echo json_encode(["error" => "Slug already exists."]);
        } else {
            echo json_encode(["error" => "Failed to update blog."]);
        }
    }
    exit;
}

// DELETE: Delete a blog
if ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing blog ID"]);
        exit;
    }
    
    try {
        $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode(["status" => "success"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to delete blog."]);
    }
    exit;
}

// If method not supported
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
?>
