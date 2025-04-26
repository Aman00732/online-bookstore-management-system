// Hardcoded Book Data
const books = [
    { title: "IKIGAI", author: "Author A", price: 200, image: "ikigai.webp" },
    { title: "DOPAMIX", author: "Author B", price: 250, image: "DOPAMIX.Webp" },
    { title: "METAMORPHOSIS", author: "Author C", price: 300, image: "METRAMORPHOSI.webp" },
    { title: "MAGIC", author: "Author D", price: 150, image: "MAGIC.webp" },
    { title: "HARRY POTTER", author: "Author E", price: 220, image: "HARRYPOYTTER.webp" },
    { title: "ATOMIC HABITS", author: "Author F", price: 180, image: "ATOMIC.jpg" },
    { title: "5 AM CLUB", author: "Author G", price: 270, image: "5AM.jpg" },
    { title: "GOOD VIBES", author: "Author H", price: 320, image: "GOOD.jpg" },
    { title: "TAO TE CHING", author: "Author I", price: 210, image: "TOE TA.jpg" },
    { title: "YOU CAN", author: "Author J", price: 290, image: "YOU CAN.jpg" },
    { title: "WABI SABI", author: "Author K", price: 190, image: "WABI SABI.jpg" },
    { title: "MEMORY", author: "Author L", price: 310, image: "MEMORY.jpg" },
];

// Display Books on Home Page
window.onload = function() {
    const container = document.getElementById('book-container');
    if (container) {
        books.forEach(book => {
            container.innerHTML += `
                <div class="book">
                    <img src="${book.image}" alt="${book.title}">
                    <h3>${book.title}</h3>
                    <p>By ${book.author}</p>
                    <p>Price: ₹${book.price}</p>
                    <button>Buy Now</button>
                </div>
            `;
        });
    }
};

// Admin Login Function
function adminLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Hardcoded admin credentials
    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
