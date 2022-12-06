import { Item } from "./Item";

describe("Item", () => {
  it("can get the product data from a string", () => {
    const someProduct = new Item("1 music CD at 14.99");
    expect(someProduct.price).toEqual(14.99);
    expect(someProduct.productName).toEqual("music CD");
    expect(someProduct.quantity).toEqual(1);
  });

  it("knows the which products are exempt", () => {
    const someExemptProduct = new Item("1 book at 10.99");
    const importedExemptProduct = new Item(
      "1 imported box of chocolates at 89.45"
    );
    const someNonExepmt = new Item("1 bottle of perfume at 100.55");
    expect(someExemptProduct.isExempt()).toEqual(true);
    expect(importedExemptProduct.isExempt()).toEqual(true);
    expect(someNonExepmt.isExempt()).toEqual(false);
  });

  it("knows the which products are imported", () => {
    const importedExemptProduct = new Item(
      "1 imported box of chocolates at 89.45"
    );
    const importedNonExempt = new Item(
      "1 imported bottle of perfume at 100.55"
    );
    const nonImportedProduct = new Item("1 book at 10.99");

    expect(importedExemptProduct.isImported()).toEqual(true);
    expect(importedNonExempt.isImported()).toEqual(true);
    expect(nonImportedProduct.isImported()).toEqual(false);
  });
});
