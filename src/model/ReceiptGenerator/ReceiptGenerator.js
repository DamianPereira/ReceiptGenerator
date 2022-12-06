import { Item } from "../Item/Item";
import { TaxCalculator } from "../TaxCalculator/TaxCalculator";

export class ReceiptGenerator {
  static generate(input) {
    let items = [];
    try {
      const inputlines = input.split("\n");
      items = inputlines.map((line) => new Item(line));
    } catch (error) {
      console.error("Error processing products: ", error.message);
    }
    const total = items.reduce(
      (accum, item) => accum + item.quantity * TaxCalculator.tax(item).total,
      0
    );
    const salesTaxesTotal = items.reduce(
      (accum, item) => accum + item.quantity * TaxCalculator.tax(item).salesTax,
      0
    );
    const outputLines = items.map(
      (item) =>
        `${item.quantity} ${item.productName}: ${(
          item.quantity * TaxCalculator.tax(item).total
        ).toFixed(2)}`
    );
    outputLines.push(`Sales Taxes: ${salesTaxesTotal.toFixed(2)}`);
    outputLines.push(`Total: ${total.toFixed(2)}`);
    return outputLines.join("\n");
  }
}
