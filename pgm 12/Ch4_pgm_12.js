var sale1;
var sale2;
var sale3;
var sale4; 
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 8 }; 

calculateTax = function (sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function (sale) {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
};

sale = sale1;
calculateTax(sale);
displaySale(sale);

sale = sale2;
calculateTax(sale);
displaySale(sale);

sale = sale3;
calculateTax(sale);
displaySale(sale);

sale = sale4; 
calculateTax(sale);
displaySale(sale);

var processSale = function (sale) {
    calculateTax(sale);
    displaySale(sale);
    console.log("------------------------------");
};


processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);