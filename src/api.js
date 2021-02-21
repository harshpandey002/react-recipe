export const getRecipe = (t, id) => {
  if (t == "Random") {
    return "https://api.spoonacular.com/recipes/random?apiKey=653e95e54988458dbd766f7efad3fa79&number=9";
  } else if (t == "Details") {
    return `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=653e95e54988458dbd766f7efad3fa79`;
  } else {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=653e95e54988458dbd766f7efad3fa79&number=36&query=${t}`;
  }
};

//d910a1023ead47d6b546d370be09f56f
//727b59b0ee7d401182d605d64f00b24f
//653e95e54988458dbd766f7efad3fa79
//2bffb5a36e604d8cb57ba61c2cee53b9
