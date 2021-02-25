export const getRecipe = (t, id) => {
  if (t == "Random") {
    return "https://api.spoonacular.com/recipes/random?apiKey=727b59b0ee7d401182d605d64f00b24f&number=9";
  } else if (t == "Details") {
    return `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=653e95e54988458dbd766f7efad3fa79`;
  } else if (t == "Ingredients") {
    return `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=2bffb5a36e604d8cb57ba61c2cee53b9`;
  } else if (t == "Similar") {
    return `https://api.spoonacular.com/recipes/${id}/similar?apiKey=d910a1023ead47d6b546d370be09f56f&number=9`;
  } else {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=be586995b8de4a398e6b45113c788ce9&number=36&query=${t}`;
  }
};

// 727b59b0ee7d401182d605d64f00b24f
// 653e95e54988458dbd766f7efad3fa79
// 2bffb5a36e604d8cb57ba61c2cee53b9
// d910a1023ead47d6b546d370be09f56f
// be586995b8de4a398e6b45113c788ce9

// 36d373dd810f4a49a11b857c27612cba
// 9f71fa6f0e24428e91c48db239bbbb7c
// 4ddd8a7841fd40e8ba1c29f161654b8c
// cd5cf63d697b4b818a658a424a447bfb
// 71391136dda943c9be1189186f02048d

// ce19e69733bb4e57a6c88462961ba36b
// ab281e8b2a6a409198058909ab38a05e
// 0ae708fcdcc04eee8a7e7a5f4a32aa44
// 2a0fcf7a3c9248718a10f76f181eb0b9
// 74f1d01827e74269b86eada3d61deb34

// f7aea096eaf044fc962cb19d27d05cbf
