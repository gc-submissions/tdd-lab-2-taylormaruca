const { Product } = require('./Product');

class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    product = new Product({ name, price, taxable });
    this.items.push(product);
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalBeforeTax() {
    let price = 0;
    for (i = 0; i <= this.items.length; i++) {
      price += this.items[i];
    }
    return price;
  }

  getTotalWithTax() {}

  getTax() {
      const tax = this.getTotalWithTax - this.getTotalBeforeTax;
      return tax;
  }
}
module.exports = { Cart };
module.exports = { Product };

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
