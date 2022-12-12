"use strict";
//Creating a class for generating a new list of products
class Product {
    //constructor 
    constructor(container) {
        this.container = container;
    }
    //rendering new product
    render(product, price, quantity) {
        var totalPrice = (price * quantity); // getting the total by multiplying price and quantity
        const tableRow = document.createElement('tr'); //creating a new table row
        const tableData = `<td scope="row"> </td>
                        <td>${product}</td>
                        <td>${price.toLocaleString()}</td>
                        <td>${quantity}</td>
                        <td>${totalPrice.toLocaleString()}</td>
                        <td id="hideColumn"><button onclick="deleteRow(this)" id="deleteBtn">Delete</button></td>
                        <td hidden style="display: none;">${totalPrice}</td>`; //creating table data
        tableRow.insertAdjacentHTML('beforeend', tableData); //appending the table data to the table row
        this.container.append(tableRow); //appending the table row to the container ==== tbody
    }
    //addprices
    addPrices() {
        var tbody = this.container; //container === tbody
        var rows = tbody.rows.length; //number of rows in the tbody
        var result = 0; //initial result = 0
        //using for loop for getting the individual rows
        for (let i = 0; i < rows; i++) {
            let trElements = tbody.rows[i]; //no of rows
            let tdElement = trElements.cells[6]; //geting the 5th cells
            let textNode = tdElement.childNodes.item(0); //getting the content of each of the 5th cells
            var number = parseFloat(textNode.data); //converting to number
            result += number; //incrementing the result 
        }
        var formattedSum = result.toLocaleString(); ///formatting the number
        return `${formattedSum}`; //returning the formatted sum
    }
}
//function for deleting a row and substracting from the total
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var tableBody = document.querySelector('table');
    tableBody.deleteRow(i);
    var cellElement = r.parentNode.parentNode.cells[6];
    var cellData = cellElement.innerText;
    var dataFormat = parseFloat(cellData);
    var getTotal = total.textContent;
    getTotal = getTotal.replace(/\,/g, '');
    var totalFormat = parseFloat(getTotal);
    var newTotal = (totalFormat - dataFormat);
    total.textContent = newTotal.toLocaleString();
    grandTotal.textContent = newTotal.toLocaleString();
}
//getting the values
const productName = document.getElementById('product');
const quantity = document.getElementById('quantity');
const unitPrice = document.getElementById('price');
//where to display values
const grandTotal = document.getElementById('grandTotal');
const total = document.getElementById('total');
//getting the table body and creating a new table row
const tableBody = document.querySelector('tbody');
const addedProduct = new Product(tableBody);
//getting the table caption 
const tableCaptionD = document.querySelector('caption');
//form 
const productForm = document.getElementById('form');
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //formatting values gotten
    let tableValues;
    tableValues = [productName.value, unitPrice.valueAsNumber, quantity.valueAsNumber];
    //rending the new purchased products
    addedProduct.render(productName.value, unitPrice.valueAsNumber, quantity.valueAsNumber);
    //code for displaying the appreciation message
    tableCaptionD.style.visibility = 'visible';
    //code for displaying the total amount for purchases
    total.textContent = addedProduct.addPrices();
    grandTotal.textContent = addedProduct.addPrices();
});
