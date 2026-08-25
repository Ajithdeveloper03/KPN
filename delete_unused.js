const fs = require('fs');
const unused = [
"public/images/image1.png",
"public/images/image2.png",
"public/images/roofing4.png",
"public/images/services/animal-ser-4.png",
"public/images/services/cricket-image-3.png",
"public/images/services/cricket-image-4.png",
"public/images/services/cricket-image-5.png",
"public/images/services/dairy-image-5.png",
"public/images/services/factory-04-image.png",
"public/images/services/factory-05-image.png",
"public/images/services/factory-image.png",
"public/images/services/factory-shed-banner-image-1.png",
"public/images/services/factory-shed-banner-image.png",
"public/images/services/home-roofing-shed-1-section-3-image.png",
"public/images/services/home-roofing-shed-2-section-2-image.png",
"public/images/services/industrial.jpeg",
"public/images/services/poultry-image-4.png",
"public/images/services/poultry02.png",
"public/images/services/sports01.png",
"public/images/services/warehouse-05-image.png",
"public/images/services/warehouse-06.png",
"public/images/services/warehouse-07.png",
"public/images/services/why-kpn-is-different-terrace.png"
];
unused.forEach(u => {
    try {
        fs.unlinkSync(u);
        console.log("Deleted", u);
    } catch(e) {
        console.log("Failed", u);
    }
});
