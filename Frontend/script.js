const API_URL = "http://localhost:5000/api/heritage";

let allProducts = [];


// LOAD PRODUCTS

async function loadProducts() {

    try {

        const response = await fetch(API_URL);

        allProducts = await response.json();

        displayProducts(allProducts);

    } catch (error) {

        console.error("Error loading products:", error);

        document.getElementById("productsContainer").innerHTML =
            "<p>Unable to load products.</p>";
    }
}


// DISPLAY PRODUCTS

function displayProducts(products) {

    const container = document.getElementById("productsContainer");

    container.innerHTML = "";

    if (products.length === 0) {

        container.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-icon">
                🪵
            </div>

            <h3>
                ${product.name}
            </h3>

            <p class="artisan">
                ${product.artisan}
            </p>

            <p class="description">
                ${product.description}
            </p>

            <div class="product-info">

                <span class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <span class="product-category">
                    ${product.category}
                </span>

            </div>

        `;

        container.appendChild(card);

    });
}


// SEARCH PRODUCTS

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;


    const filteredProducts = allProducts.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.artisan.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category.toLowerCase() ===
            selectedCategory.toLowerCase();


        return matchesSearch && matchesCategory;

    });


    displayProducts(filteredProducts);
}


// CATEGORY FILTER

document
    .getElementById("categoryFilter")
    .addEventListener("change", searchProducts);


// SEARCH WHILE TYPING

document
    .getElementById("productSearch")
    .addEventListener("input", searchProducts);


// CATEGORY CARD FILTER

function filterProducts(category) {

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");


    searchInput.value = "";

    categoryFilter.value = category;


    searchProducts();


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// CLEAR FILTERS

function clearFilters() {

    document.getElementById("productSearch").value = "";

    document.getElementById("categoryFilter").value = "all";

    displayProducts(allProducts);
}


// SCROLL

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });
}


// SELLER MODAL

function openSeller() {

    document.getElementById("modalTitle").innerText =
        "Join Dharohar";

    document.getElementById("modalText").innerText =
        "Seller registration will be available soon.";

    document
        .getElementById("modal")
        .classList.add("active");
}


// CUSTOM FORM

function openCustomForm() {

    document.getElementById("modalTitle").innerText =
        "Custom Project";

    document.getElementById("modalText").innerText =
        "Custom project requests will be available soon.";

    document
        .getElementById("modal")
        .classList.add("active");
}


// CLOSE MODAL

function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("active");
}


// LOAD PRODUCTS WHEN PAGE OPENS

loadProducts();
const authModal = document.getElementById("authModal");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");

const switchText = document.getElementById("switchText");
const switchButton = document.getElementById("switchButton");

const authMessage = document.getElementById("authMessage");

let loginMode = false;


function openAuthModal() {

    authModal.classList.add("active");

    loginMode = false;

    updateAuthUI();

}


function closeAuthModal() {

    authModal.classList.remove("active");

    signupForm.reset();
    loginForm.reset();

    authMessage.textContent = "";

}


function toggleAuthMode() {

    loginMode = !loginMode;

    updateAuthUI();

}


function updateAuthUI() {

    authMessage.textContent = "";

    if (loginMode) {

        signupForm.style.display = "none";
        loginForm.style.display = "block";

        authTitle.textContent = "Welcome back";
        authSubtitle.textContent =
            "Login to continue exploring Dharohar.";

        switchText.textContent =
            "Don't have an account?";

        switchButton.textContent =
            "Sign Up";

    } else {

        signupForm.style.display = "block";
        loginForm.style.display = "none";

        authTitle.textContent =
            "Create your account";

        authSubtitle.textContent =
            "Join the community of people discovering local craftsmanship.";

        switchText.textContent =
            "Already have an account?";

        switchButton.textContent =
            "Login";

    }

}


signupForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;


    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/signup",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            authMessage.textContent =
                data.message || "Signup failed.";

            return;

        }


        authMessage.textContent =
            "Account created successfully!";

        signupForm.reset();

        setTimeout(() => {

            closeAuthModal();

        }, 1500);


    } catch (error) {

        authMessage.textContent =
            "Unable to connect to server.";

    }

});


loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            authMessage.textContent =
                data.message || "Login failed.";

            return;

        }


        localStorage.setItem(
            "dharoharToken",
            data.token
        );

        localStorage.setItem(
            "dharoharUser",
            JSON.stringify(data.user)
        );


        authMessage.textContent =
            `Welcome, ${data.user.name}!`;

        loginForm.reset();


        setTimeout(() => {

            closeAuthModal();

        }, 1200);


    } catch (error) {

        authMessage.textContent =
            "Unable to connect to server.";

    }

});