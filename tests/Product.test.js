const { Product } = require('../src/js/Product');

describe("Product", () => {
  test("sets properties on class", () => {
    expect(new Product('Taylor', 1234, true)).toEqual({"name": 'Taylor', "price": 1234, "taxable": true});
    expect(new Product('Brice', 1, false)).toEqual({"name": 'Brice', "price": 1, "taxable": false});
  });

  test("taxable product returns price + 10%", () => {
    const productWithTax = new Product('shirt', 1, true);
    expect(productWithTax.getPriceWithTax()).toEqual(1.1);
    const productWithTax2 = new Product('shirt', 3, true);
    expect(productWithTax2.getPriceWithTax()).toBeCloseTo(3.30);
  });

  test("non taxable product returns price", () => {
    const product = new Product('pants', 1, false);
    expect(product.getPriceWithTax()).toEqual(1);
    const product2 = new Product('pants', 35467, false);
    expect(product2.getPriceWithTax()).toBe(35467);
  });
});