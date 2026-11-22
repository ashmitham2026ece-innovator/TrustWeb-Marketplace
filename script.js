
// Sample marketplace products
const products = [
    {
        name: "Business Website",
        category: "Business",
        description: "A professional website for small businesses.",
        price: 2500,
        security: "Review information available"
    },
    {
        name: "Student Learning Portal",
        category: "Education",
        description: "A simple platform for online learning.",
        price: 3500,
        security: "Review information available"
    },
    {
        name: "Personal Portfolio",
        category: "Portfolio",
        description: "Showcase your skills and projects.",
        price: 1500,
        security: "Review information available"
    },
    {
        name: "Online Store Website",
        category: "Business",
        description: "A website prototype for online stores.",
        price: 4500,
        security: "Not yet reviewed"
    },
    {
        name: "College Management Portal",
        category: "Education",
        description: "Manage student information and records.",
        price: 5000,
        security: "Not yet reviewed"
    },
    {
        name: "Developer Portfolio",
        category: "Portfolio",
        description: "A modern portfolio for developers.",
        price: 2000,
        security: "Review information available"
    }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

let selectedCategory = "All";

// Display products
function displayProducts() {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        const securityClass =
            product.security === "Review information available"
            ? "security"
            : "";

        card.innerHTML = `
            <span class="category">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">₹${product.price}</div>
            <span class="${securityClass}">
                ${product.security}
            </span>
            <br><br>
            <button type="button">View Details</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            alert(
                product.name +
                "\nPrice: ₹" + product.price +
                "\nSecurity: " + product.security +
                "\n\nThis is a demonstration listing."
            );
        });

        productGrid.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener("input", displayProducts);

// Category filter
document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")
            ?.classList.remove("active");

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        displayProducts();
    });
});

// Custom website request
document.getElementById("customForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value;

        const project =
            document.getElementById("projectType").value;

        document.getElementById("formMessage").textContent =
            "Thank you, " + name +
            "! Your request for " + project +
            " has been recorded in this demo.";

        this.reset();
    });

// Load products when website opens
displayProducts();
