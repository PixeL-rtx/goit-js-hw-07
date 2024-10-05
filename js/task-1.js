const listCategories = document.querySelectorAll('#categories .item');
console.log(`Numbers od categories: ${listCategories.length}`);
listCategories.forEach((category) => {
    const categoryTiles = category.querySelector('h2').textContent;
    const categoryLists = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTiles}`);
    console.log(`Elements: ${categoryLists}`);
});