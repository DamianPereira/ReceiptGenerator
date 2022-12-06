const exemptProducts = [
  "book",
  "chocolate bar",
  "imported box of chocolates",
  "imported boxes of chocolates",
  "packet of headache pills"
];
const importedProducts = [
  "imported box of chocolates",
  "imported boxes of chocolates",
  "imported bottle of perfume"
];
export class Item {
  constructor(productString) {
    const quantityAndProductName = productString.split(" at ")[0];
    this.quantity = parseInt(productString.split(" ")[0], 10);
    this.price = parseFloat(productString.split(" at ")[1]);
    this.productName = quantityAndProductName.substr(
      quantityAndProductName.indexOf(" ") + 1
    );
    if (isNaN(this.quantity)) {
      throw new Error("Error processing product, quantity is not a number");
    }
  }
  isExempt() {
    return exemptProducts.includes(this.productName);
  }
  isImported() {
    return importedProducts.includes(this.productName);
  }
}
