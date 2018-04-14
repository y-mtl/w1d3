var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getSalesTotal(arr){
  var newArr = arr.reduce(function(a, b){
    return a + b;
  });
  return newArr;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var salesTotal = 0;
  var tax = 0; // tax: { AB: 0.05, BC: 0.12, SK: 0.1 }
  var output = {};
  var objKeyName = '';
  for (var i = 0; i < salesData.length; i++) {

    salesTotal = getSalesTotal(salesData[i].sales);

    for (var provinceName in salesTaxRates) {
      if (salesData[i].province === provinceName) {
        //console.log(salesTotal * taxRates[provinceName]);
        tax = salesTotal * taxRates[provinceName];
      }
    }
    //return tax;
    //console.log(`name: ${salesData[i].name}, sales total: ${salesTotal}, tax: ${tax}`);
    objKeyName = salesData[i].name;//console.log(objKeyName);
    // to make Key, should be always []
    if(!output[objKeyName]) {
       output[objKeyName] = {
        'totalSales': salesTotal,
        'totalTaxes': tax
      };
    } else {
      var newSales = output[objKeyName].totalSales + salesTotal;
      var newTaxes = output[objKeyName].totalTaxes + tax;
      // salesTotal += salesTotal;
      tax += tax;
      output[objKeyName] = {
        'totalSales': newSales,
        'totalTaxes': newTaxes
      }
    }

  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
