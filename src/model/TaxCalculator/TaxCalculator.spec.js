import { TaxCalculator } from "./TaxCalculator";
import { Item } from "../Item/Item";

describe("TaxCalculator", () => {
  it("adds the 10% tax for non books/food/medical/", () => {
    const someItem = new Item("1 music CD at 14.99");
    expect(TaxCalculator.tax(someItem).total).toEqual(16.49);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(1.5);
  });

  it("does not add the 10% tax for books/food/medical/", () => {
    const someItem = new Item("1 book at 14.99");
    expect(TaxCalculator.tax(someItem).total).toEqual(14.99);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(0);
  });

  it("adds the 5% tax for imported books/food/medical/", () => {
    const someItem = new Item("1 imported boxes of chocolates at 10.00");
    expect(TaxCalculator.tax(someItem).total).toEqual(10.5);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(0.5);
  });

  it("adds the both the 10% local tax and 5% imported tax for imported non books/food/medical/", () => {
    const someItem = new Item("1 imported bottle of perfume at 10.00");
    expect(TaxCalculator.tax(someItem).total).toEqual(11.5);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(1.5);
  });

  it("rounds up sales taxes when nearest is up", () => {
    const someItem = new Item("1 imported bottle of perfume at 47.50");
    expect(TaxCalculator.tax(someItem).total).toEqual(54.65);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(7.15);
  });

  it("rounds up sales taxes when nearest is down", () => {
    const someItem = new Item("1 imported boxes of chocolates at 11.25");
    expect(TaxCalculator.tax(someItem).total).toEqual(11.85);
    expect(TaxCalculator.tax(someItem).salesTax).toEqual(0.6);
  });
});
