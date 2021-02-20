export const getRecipe = (t) => {
  if (t == "Random") {
    return "https://api.spoonacular.com/recipes/random?apiKey=727b59b0ee7d401182d605d64f00b24f&number=9";
  } else {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=727b59b0ee7d401182d605d64f00b24f&number=9&query=${t}`;
  }
};

//d910a1023ead47d6b546d370be09f56f
//727b59b0ee7d401182d605d64f00b24f
//653e95e54988458dbd766f7efad3fa79
