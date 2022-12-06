import { ReceiptGenerator } from "./ReceiptGenerator";

const input1 = `2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;

const output1 = `2 book: 24.98
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 42.32`;

const input2 = `1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50`;

const output2 = `1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15`;

const input3 = `1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
3 imported boxes of chocolates at 11.25`;

const output3 = `1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
3 imported boxes of chocolates: 35.55
Sales Taxes: 7.90
Total: 98.38`;

describe("ReceiptGenerator", () => {
  it("can generate the right receipt for input 1", () => {
    expect(ReceiptGenerator.generate(input1)).toEqual(output1);
  });
  it("can generate the right receipt for input 2", () => {
    expect(ReceiptGenerator.generate(input2)).toEqual(output2);
  });
  it("can generate the right receipt for input 3", () => {
    expect(ReceiptGenerator.generate(input3)).toEqual(output3);
  });
});
