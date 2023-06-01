interface Product {
    name: string;
    price: number;
  }
  
  function findProductWithLowestPrice(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let lowestPriceProduct: Product = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price < lowestPriceProduct.price) {
        lowestPriceProduct = products[i];
      }
    }
  
    return lowestPriceProduct;
  }
  
  const products: Product[] = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 5 },
    { name: "Product C", price: 15 },
  ];
  
  const lowestPriceProduct = findProductWithLowestPrice(products);
  console.log(lowestPriceProduct); 
  