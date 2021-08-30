const { Cart } = require('../src/js/Cart');
const { Product } = require('../src/js/Product');

describe("Cart", () => {
  // Confirm that the constructor correctly sets the items property to an empty array
  test("constructor sets items property to empty array", () => {
    expect(new Cart()).toEqual([]);
  });
});

describe("Cart", () => {
  // Calling add once adds one product to the items array. Make sure the correct product object was added.
  test("calling add once adds one product to items array", () => {
    const product1 = new Product('pants', 1, false);
    expect();
  });
});



// Calling add twice leaves a total of two Products in the items array. Make sure the correct product objects were added.
// getItemCount returns the length of the items array. You will have to call the add method one or more times to fill the array. (Write two test cases with different amounts of items.)
// getTotalBeforeTax returns the sum of the price of all Products in the items array. (Write two test cases with different mixes of taxable and non-taxable products and with different numbers of products.)
// getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array. Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different mixes of taxable and non-taxable products and with different numbers of products.)
// getTax returns the difference between getTotalWithTax and getTotalBeforeTax. As before, add some sample items in order to get some numbers to work with.
