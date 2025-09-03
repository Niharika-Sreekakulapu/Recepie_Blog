document.addEventListener('DOMContentLoaded', () => {

    const recipes = [
        {
            title: "Classic Chocolate Cake",
            description: "A rich and moist chocolate cake that is perfect for any occasion.",
            image: "images/cake.png"
        },
        {
            title: "Spicy Chicken Curry",
            description: "A delicious and flavorful curry with tender chicken and aromatic spices.",
            image: "images/chiken.png"
        },
        {
            title: "Vegetarian Lasagna",
            description: "Layers of pasta, ricotta cheese, and fresh vegetables baked to perfection.",
            image: "images/lasanga.png"
        },
        {
            title: "Homemade Pizza",
            description: "Create your own perfect pizza with a crispy crust and your favorite toppings.",
            image: "images/pizza.png"
        },
        {
            title: "Creamy Tomato Soup",
            description: "A comforting and smooth tomato soup, great for a cold day.",
            image: "images/soup.png"
        },
        {
        title: "Fresh Guacamole",
        description: "A zesty and easy-to-make dip with ripe avocados, onions, and lime.",
        image: "images/guacamole.png"
        }
    ];

    const recipeContainer = document.getElementById('recipe-container');
    const searchInput = document.getElementById('recipe-search');

    function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <div class="recipe-card-content">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
        </div>
    `;

    // Add a click event listener to the card
    card.addEventListener('click', () => {
        alert(`You clicked on: ${recipe.title}`);
    });

    return card;
}

    function renderRecipes(filter = '') {
        recipeContainer.innerHTML = '';
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(filter.toLowerCase()) || 
            recipe.description.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                recipeContainer.appendChild(createRecipeCard(recipe));
            });
        } else {
            recipeContainer.innerHTML = '<p>No recipes found. Try a different search term.</p>';
        }
    }

    // Initial render of all recipes
    renderRecipes();

    // Event listener for search input
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        renderRecipes(searchTerm);
    });

});