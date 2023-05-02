const recipeList = document.querySelector("#recipe-list");
const recipeIframe = document.querySelector("#recipe-iframe");

recipeList.addEventListener("change", function () {
  const selectedRecipe = recipeList.value;
});

const myButton = document.querySelector("#click-button");
myButton.addEventListener("click", function () {
  alert("Thank you for sharing!");
});
