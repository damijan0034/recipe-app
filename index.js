API_KEY = "194147f580d843838df9e16c8e4baf1a"

const recipeListEl = document.getElementById("recipe-list")

 function displayRecipes(recipes) {
    recipeListEl.innerHTML = ""

   recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li")
        recipeItemEl.classList.add("recipe-item")

        const recipeImgEl = document.createElement("img")
        recipeImgEl.src = recipe.image
        recipeImgEl.alt = "recipe.image"

        const recipeTitleEl = document.createElement("h2")
            recipeTitleEl.innerText=recipe.title

            const recipeIngredientsEl = document.createElement("p") 
            recipeIngredientsEl.innerHTML=`
                <strong>Ingredients:</strong>
                ${recipe.extendedIngredients.map((ingredient)=>(
                    ingredient.original
                )).join(", ")} ` 
                
        const recipeLinkEl=document.createElement("a") 
        recipeLinkEl.href=recipe.sourceUrl
        recipeLinkEl.innerText="View More"       

        recipeItemEl.appendChild(recipeImgEl)
        recipeItemEl.appendChild(recipeIngredientsEl)
        recipeItemEl.appendChild(recipeTitleEl)
        recipeItemEl.appendChild(recipeLinkEl)


        recipeListEl.appendChild(recipeItemEl)

        
       
    });

 }
    async function getRecipes() {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

        const data = await response.json()

        console.log(data)

        return data.recipes
    }

    async function init() {
        const recipes = await getRecipes()

        displayRecipes(recipes)

    }

    init();