const { Cart } = require("../src/js/Cart");
const { Product } = require("../src/js/Product");

describe("Cart", () => {
  // Confirm that the constructor correctly sets the items property to an empty array
  test("constructor sets items property to empty array", () => {
    const cart = new Cart();
    expect(cart.items).toEqual([]);
  });
});

// Calling add once adds one product to the items array. Make sure the correct product object was added.
test("calling add once adds one product to items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 1, true));
  expect(cart.items).toEqual([new Product("Pants", 1, true)]);
});

// Calling add twice leaves a total of two Products in the items array. Make sure the correct product objects were added.
test("call add twice adds two products in items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  expect(cart.items).toEqual([
    new Product("Pants", 76, true),
    new Product("Shirt", 35, false),
  ]);
});

// getItemCount returns the length of the items array. You will have to call the add 
// method one or more times to fill the array. (Write two test cases with different amounts of items.)
test("use getItemCount to return length of items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  expect(cart.getItemCount()).toBe(2);
});

test("use getItemCount for different amount of items", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  expect(cart.getItemCount()).toBe(1);
});

test("use getTotalBeforeTax to return sum of all products in items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  expect(cart.getTotalBeforeTax()).toBe(111);
});

// getTotalBeforeTax returns the sum of the price of all Products in the items array. 
// (Write two test cases with different mixes of taxable and non-taxable products and with different numbers of products.)
test("use getTotalBeforeTax to return sum of different number of products in items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  cart.add(new Product("Shoes", 100, false));
  expect(cart.getTotalBeforeTax()).toBe(211);
});

// getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array. 
// Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different mixes 
// of taxable and non-taxable products and with different numbers of products.)
test("use getTotalWithTax to return sum of getPriceWithTax method for all products in items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  cart.add(new Product("Shoes", 100, true));
  expect(cart.getTotalWithTax()).toBeCloseTo(228.6);
});

test("use getTotalWithTax to return sum of getPriceWithTax with different number of products in items array", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  cart.add(new Product("Shoes", 100, true));
  cart.add(new Product("Hat", 55, true));
  expect(cart.getTotalWithTax()).toBeCloseTo(289.1);
});

// getTax returns the difference between getTotalWithTax and getTotalBeforeTax. As before, add some sample 
// items in order to get some numbers to work with.
test("use getTax to return difference between getTotalWithTax and getTotalBeforeTax", () => {
  let cart = new Cart();
  cart.add(new Product("Pants", 76, true));
  cart.add(new Product("Shirt", 35, false));
  cart.add(new Product("Shoes", 100, true));
  cart.add(new Product("Hat", 55, true));
  expect(cart.getTax()).toBeCloseTo(23.1);
});