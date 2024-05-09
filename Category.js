let posts = [
    { id: 1, title: "Nike Tn", image: "nike.jpg", category: "Nike", price: "100$" },
    { id: 2, title: "Adidas CrazyFust", image: "adidas.jpg", category: "Adidas", price: "110$" },
    { id: 3, title: "Nike Phantom", image: "nike1.jpg", category: "Nike", price: "170$" },
    { id: 4, title: "Adidas DragoX", image: "adidas1.jpg", category: "Adidas", price: "80$" },
    { id: 5, title: "Nike Tiempo", image: "nike2.jpg", category: "Nike", price: "120$" },
    { id: 6, title: "Adidas X CrazyFust", image: "adidas2.jpg", category: "Adidas", price: "100$" },
    { id: 7, title: "Nike Luna", image: "nike3.jpg", category: "Nike" ,price: "220$" },
    { id: 8, title: "Adidas Predator", image: "adidas3.jpg", category: "Adidas", price: "130$" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    if (category === "Корзина") {
        category = "All"; 
    }
    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4>${post.title}</h4>
                                    <p>${post.price}</p>
                                    <button onclick="addToCart(${post.id})">Додати в корзину</button>

                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

