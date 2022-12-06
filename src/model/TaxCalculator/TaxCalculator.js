export class TaxCalculator {
  static tax(product) {
    const localTax = product.isExempt() ? 0 : (product.price * 10) / 100;
    const importTax = product.isImported() ? (product.price * 5) / 100 : 0;
    const roundedTax = Math.ceil((localTax + importTax) * 20) / 20;
    const taxedPrice = product.price + roundedTax;
    return {
      salesTax: Math.round(roundedTax * 100) / 100,
      total: Math.round(taxedPrice * 100) / 100
    };
  }
}
