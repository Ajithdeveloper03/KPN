<?php
require_once 'auth.php';

// Handle Login Submission
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    if (!verify_csrf_token($_POST['csrf_token'])) {
        $error = 'Invalid security token.';
    } else {
        $username = trim($_POST['username'] ?? '');
        $password = $_POST['password'] ?? '';
        
        if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD_HASH)) {
            $_SESSION['admin_logged_in'] = true;
            session_regenerate_id(true); // Prevent session fixation
            header("Location: index.php");
            exit;
        } else {
            $error = 'Invalid username or password.';
        }
    }
}

// Handle Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KPN Roofing Shed - Secure CMS</title>
    <!-- Use Tailwind via CDN for quick secure styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 selection:bg-blue-600 selection:text-white">

<?php if (!is_logged_in()): ?>
    <!-- Login Screen -->
    <div class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-black">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Secure Admin</h1>
                <p class="text-gray-500 font-medium">CMS for KPN Roofing Shed</p>
            </div>
            
            <?php if ($error): ?>
                <div class="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-bold border border-red-100">
                    <?= htmlspecialchars($error) ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="index.php" class="space-y-5">
                <input type="hidden" name="csrf_token" value="<?= htmlspecialchars(generate_csrf_token()) ?>">
                
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Username</label>
                    <input type="text" name="username" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                </div>
                
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Password</label>
                    <input type="password" name="password" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                </div>
                
                <button type="submit" name="login" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30">
                    Secure Login
                </button>
            </form>
        </div>
    </div>
<?php else: ?>
    <!-- Dashboard Screen -->
    <div class="min-h-screen flex flex-col md:flex-row bg-gray-50">
        <!-- Sidebar -->
        <aside class="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col md:min-h-screen border-r border-slate-800">
            <div class="mb-10">
                <h2 class="text-2xl font-bold">KPN Admin</h2>
                <p class="text-slate-400 text-sm mt-1">Content Management</p>
            </div>
            <nav class="flex-grow space-y-2">
                <a href="#" class="block px-4 py-3 bg-blue-600 text-white rounded-xl font-bold">Blogs</a>
            </nav>
            <div class="mt-auto pt-6 border-t border-slate-800">
                <a href="index.php?logout=1" class="block text-center px-4 py-3 bg-slate-800 hover:bg-red-600 text-white rounded-xl font-bold transition-colors">Logout</a>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-grow p-6 md:p-10" id="app-root">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Manage Blogs</h2>
                <button onclick="showEditor()" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-blue-700 transition-colors">
                    + New Blog
                </button>
            </div>

            <!-- Blog List View -->
            <div id="view-list" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200 text-gray-500 text-sm uppercase tracking-wider">
                            <th class="px-6 py-4 font-bold">Title</th>
                            <th class="px-6 py-4 font-bold">Category</th>
                            <th class="px-6 py-4 font-bold">Date</th>
                            <th class="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="blog-table-body" class="divide-y divide-gray-100">
                        <tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">Loading blogs...</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Blog Editor View -->
            <div id="view-editor" class="hidden bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div class="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                    <h3 class="text-2xl font-bold text-gray-900" id="editor-title">Create New Blog</h3>
                    <button onclick="showList()" class="text-gray-500 hover:text-gray-900 font-bold">Cancel</button>
                </div>
                
                <form id="blog-form" class="space-y-6">
                    <input type="hidden" id="blog-id" value="">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <input type="text" id="blog-title" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Slug (URL)</label>
                            <input type="text" id="blog-slug" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. industrial-shed-benefits">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Category</label>
                            <input type="text" id="blog-category" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Author</label>
                            <input type="text" id="blog-author" value="KPN Engineering Team" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Read Time</label>
                            <input type="text" id="blog-read-time" value="4 min read" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Featured Image URL</label>
                            <input type="text" id="blog-image" value="/kpnroofingshed/images/image4.jpeg" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                    </div>

                    <div class="pt-4 border-t border-gray-100">
                        <h4 class="font-bold text-lg mb-4 text-gray-800">SEO Metadata</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-1">Meta Title</label>
                                <input type="text" id="blog-meta-title" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-1">Meta Keywords</label>
                                <input type="text" id="blog-meta-keywords" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-bold text-gray-700 mb-1">Meta Description</label>
                                <textarea id="blog-meta-description" rows="2" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-gray-100">
                        <label class="block text-sm font-bold text-gray-700 mb-1">HTML Content</label>
                        <p class="text-xs text-gray-500 mb-2">Use pure HTML. Wrap paragraphs in &lt;p&gt; and headings in &lt;h2&gt;.</p>
                        <textarea id="blog-content" rows="15" required class="w-full px-4 py-3 font-mono text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    </div>

                    <div class="flex justify-end gap-4 pt-6 border-t border-gray-100">
                        <button type="button" onclick="showList()" class="px-6 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold shadow hover:bg-blue-700 transition-colors">Save Blog</button>
                    </div>
                </form>
            </div>
        </main>
    </div>

    <!-- CSRF Token for API requests -->
    <meta name="csrf-token" content="<?= htmlspecialchars(generate_csrf_token()) ?>">

    <script>
        const API_URL = 'api.php';
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        let blogs = [];

        // Fetch and render blogs
        async function loadBlogs() {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                blogs = data.data || [];
                renderTable();
            } catch (err) {
                document.getElementById('blog-table-body').innerHTML = `<tr><td colspan="4" class="px-6 py-4 text-center text-red-500">Error loading blogs.</td></tr>`;
            }
        }

        function renderTable() {
            const tbody = document.getElementById('blog-table-body');
            if (blogs.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">No blogs found. Create one!</td></tr>`;
                return;
            }

            tbody.innerHTML = blogs.map(blog => `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4">
                        <div class="font-bold text-gray-900">${blog.title}</div>
                        <div class="text-xs text-gray-500">/${blog.slug}</div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium">
                        <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">${blog.category}</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">${new Date(blog.created_at).toLocaleDateString()}</td>
                    <td class="px-6 py-4 text-right space-x-2">
                        <button onclick="editBlog(${blog.id})" class="text-blue-600 hover:text-blue-800 font-bold text-sm">Edit</button>
                        <button onclick="deleteBlog(${blog.id})" class="text-red-600 hover:text-red-800 font-bold text-sm">Delete</button>
                    </td>
                </tr>
            `).join('');
        }

        function showList() {
            document.getElementById('view-list').classList.remove('hidden');
            document.getElementById('view-editor').classList.add('hidden');
        }

        function showEditor(blog = null) {
            document.getElementById('view-list').classList.add('hidden');
            document.getElementById('view-editor').classList.remove('hidden');
            
            const form = document.getElementById('blog-form');
            form.reset();
            
            if (blog) {
                document.getElementById('editor-title').textContent = 'Edit Blog';
                document.getElementById('blog-id').value = blog.id;
                document.getElementById('blog-title').value = blog.title;
                document.getElementById('blog-slug').value = blog.slug;
                document.getElementById('blog-category').value = blog.category;
                document.getElementById('blog-author').value = blog.author;
                document.getElementById('blog-read-time').value = blog.read_time;
                document.getElementById('blog-image').value = blog.image;
                document.getElementById('blog-content').value = blog.content;
                document.getElementById('blog-meta-title').value = blog.meta_title || '';
                document.getElementById('blog-meta-description').value = blog.meta_description || '';
                document.getElementById('blog-meta-keywords').value = blog.meta_keywords || '';
            } else {
                document.getElementById('editor-title').textContent = 'Create New Blog';
                document.getElementById('blog-id').value = '';
            }
        }

        function editBlog(id) {
            const blog = blogs.find(b => b.id === id);
            if (blog) showEditor(blog);
        }

        async function deleteBlog(id) {
            if (!confirm('Are you sure you want to delete this blog?')) return;
            
            try {
                const res = await fetch(API_URL + '?id=' + id, {
                    method: 'DELETE',
                    headers: { 'X-CSRF-Token': csrfToken }
                });
                if (res.ok) {
                    loadBlogs();
                } else {
                    const err = await res.json();
                    alert('Error: ' + (err.error || 'Failed to delete'));
                }
            } catch (err) {
                alert('Connection error');
            }
        }

        // Handle Form Submission (Create / Update)
        document.getElementById('blog-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const payload = {
                id: document.getElementById('blog-id').value,
                title: document.getElementById('blog-title').value,
                slug: document.getElementById('blog-slug').value,
                category: document.getElementById('blog-category').value,
                author: document.getElementById('blog-author').value,
                read_time: document.getElementById('blog-read-time').value,
                image: document.getElementById('blog-image').value,
                content: document.getElementById('blog-content').value,
                meta_title: document.getElementById('blog-meta-title').value,
                meta_description: document.getElementById('blog-meta-description').value,
                meta_keywords: document.getElementById('blog-meta-keywords').value,
            };

            const isUpdate = !!payload.id;
            
            try {
                const res = await fetch(API_URL, {
                    method: isUpdate ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken
                    },
                    body: JSON.stringify(payload)
                });
                
                if (res.ok) {
                    showList();
                    loadBlogs();
                } else {
                    const err = await res.json();
                    alert('Error: ' + (err.error || 'Failed to save'));
                }
            } catch (err) {
                alert('Connection error');
            }
        });

        // Initialize
        loadBlogs();
    </script>
<?php endif; ?>
</body>
</html>
