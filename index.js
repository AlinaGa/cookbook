const recipeList = document.querySelector('#recipe-list');
const recipeIframe = document.querySelector('#recipe-iframe');
ecipe = document.getElementById('#recipe')

recipeList.addEventListener('change', function () {
    const selectedRecipe = recipeList.value;
    recipeIframe.src = selectedRecipe;
});

function shared() {
    alert("Shared sucessfully");
}

