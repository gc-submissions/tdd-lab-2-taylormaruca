class Product {
    constructor (name, price, taxable) {
        this.name = name;
        this.price = price;
        this.taxable = taxable;
    }

    getPriceWithTax() {
        if(this.taxable === true) {
            return this.price * 1.10;
        } else {
            return this.price;
        }
    }
}
module.exports = { Product }