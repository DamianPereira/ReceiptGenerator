import "./styles.css";
import { ReceiptGenerator } from "./model/ReceiptGenerator/ReceiptGenerator";

document.getElementById("app").innerHTML = `
<h1>Receipt Generator with taxes</h1>
<form class="product-input" id="append-form">
<label class="label-input-group"> Quantity: <input name="quantity" type="number"/></label>
<select name="productName" id="">
    <option value="">Please choose a product</option>
    <option value="book">book</option>
    <option value="music CD">music CD</option>
    <option value="chocolate bar">chocolate bar</option>
    <option value="imported box of chocolates">imported box of chocolates</option>
    <option value="imported bottle of perfume">imported bottle of perfume</option>
    <option value="bottle of perfume">bottle of perfume</option>
    <option value="packet of headache pills">packet of headache pills</option>
    <option value="imported boxes of chocolates">imported boxes of chocolates</option>
</select>
<label class="label-input-group"> Price: <input name="price" type="number" step="0.01"/></label>
<button type="submit">Append</button>
</form>
<div class="input-output">
<div><h2>Input</h2><textarea id="input"/></textarea></div>
<button id="generate-receipt">Generate Receipt ></button>
<div><h2>Output</h2><textarea id="output"/></textarea></div>
</div>
`;

const input = document.getElementById("input");
const output = document.getElementById("output");
const generateButton = document.getElementById("generate-receipt");

generateButton.addEventListener("click", () => {
  output.value = ReceiptGenerator.generate(input.value);
});

const appendForm = document.getElementById("append-form");
appendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const lines = input.value.split("\n").filter((line) => line !== "");
  lines.push(
    `${formData.get("quantity")} ${formData.get(
      "productName"
    )} at ${formData.get("price")}`
  );
  input.value = lines.join("\n");
});
