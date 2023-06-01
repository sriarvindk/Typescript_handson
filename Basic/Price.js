function findProductWithLowestPrice(products) {
    if (products.length === 0) {
        return null;
    }
    var lowestPriceProduct = products[0];
    for (var i = 1; i < products.length; i++) {
        if (products[i].price < lowestPriceProduct.price) {
            lowestPriceProduct = products[i];
        }
    }
    return lowestPriceProduct;
}
var products = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 5 },
    { name: "Product C", price: 15 },
];
var lowestPriceProduct = findProductWithLowestPrice(products);
console.log(lowestPriceProduct);
