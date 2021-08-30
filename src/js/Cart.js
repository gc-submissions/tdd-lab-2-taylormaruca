const { Product } = require("./Product");

class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalBeforeTax() {
    let price = 0;
    for (let item of this.items) {
      price += item.price;
    }
    return price;
  }

  getTotalWithTax() {
    let price = 0;
    for (let item of this.items) {
      price += item.getPriceWithTax();
    }
    return price;
  }

  getTax() {
    return this.getTotalWithTax() - this.getTotalBeforeTax();
  }
}
module.exports = { Cart };

// In the file Cart.js, create a Cart class and export it.
// The constructor has no parameters. It always sets an items property
//to an empty array. This array will later have Products added to it.
// It has several methods
// add(product) - This takes a product parameter (of type Product) and adds it to the items array.
// getItemCount() - This has no parameters and returns the length of the items array.
// getTotalBeforeTax() - This has no parameters and returns the sum of the price
//of all Products in the items array.
// getTotalWithTax() - This has no parameters and returns the sum of the getPriceWithTax()
//method of all Products in the items array.
// getTax() - This has no parameters. It subtracts the results of getTotalWithTax and
//getTotalBeforeTax and returns the result.
