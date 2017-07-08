var mysql = require ('mysql');
var prompt = require ('prompt');
var colors = require ('colors');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'BamazonDB'
});

//   //put ten products into an array to be pulled by for loop and inserted into sql table 
// var ProductValues = [
//   {
//   	ProductName: 'Drum Sticks',
//   	DeptmentName: 'Percussion',
//   	Price: '10.00',
//   	StockQuantity: '100'
//   },
//   {
//   	ProductName: 'Drum Set',
//   	DeptmentName: 'Percussion',
//   	Price: '400.00',
//   	StockQuantity: '20'
//   },
//   {
//   	ProductName: 'Drum-Tips Book',
//   	DeptmentName: 'Percussion',
//   	Price: '7.57',
//   	StockQuantity: '150'
//   },
//   {
//   	ProductName: 'Pool Que',
//   	DeptmentName: 'Billiards',
//   	Price: '50.00',
//   	StockQuantity: '20'
//   },
//   {
//   	ProductName: 'Pool Balls',
//   	DeptmentName: 'Billiards',
//   	Price: '44.98',
//   	StockQuantity: '10'
//   },
//   {
//   	ProductName: 'Trainer Que Balls',
//   	DeptmentName: 'Billiards',
//   	Price: '9.50',
//   	StockQuantity: '13'
//   },
//   {
//   	ProductName: 'Chalk',
//   	DeptmentName: 'Billiards',
//   	Price: '2.00',
//   	StockQuantity: '70'
//   },
//   {
//   	ProductName: 'Glock 23',
//   	DeptmentName: 'FireArms',
//   	Price: '460.00',
//   	StockQuantity: '11'
//   },
//   {
//   	ProductName: 'AR-10',
//   	DeptmentName: 'FireArms',
//   	Price: '827.00',
//   	StockQuantity: '7'
//   },
//   {
//   	ProductName: 'Remington 870',
//   	DeptmentName: 'FireArms',
//   	Price: '325.00',
//   	StockQuantity: '5'
//   }
// ];

//       //for loop to extract products from for loop and insert into Products table
// for (k = 0; k < ProductValues.legth; k++) {
// connection.query('INSERT INTO Products SET (ProductName, DeptmentName, Price, StockQuantity) VALUES (?, ?, ?, ?)', ProductValues[k]);
// };
// 	console.log(ProductValues);


//input the items into the Products table
connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Drum Set', 'Percussion', '400.00', '20');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Drum-Tips Book', 'Percussion', '7.57', '150');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Pool Que', 'Billiards', '50.00', '20');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Pool Balls', 'Billiards', '44.98', '10');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Trainer Que Ball', 'Billiards', '9.50', '13');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Chalk', 'Billiards', '2.00', '70');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Glock 23', 'FireArms', '460.00', '11');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('AR-10', 'FireArms', '827.00', '7');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

connection.query("INSERT INTO Products (ItemID, ProductName, DeptmentName, Price, StockQuantity) VALUES ('Remington 870', 'FireArms', '325.00', '5');", function (err, result){
	if (err) {
		throw err;
	}
	console.log(result);
});

///////////////////////////////////////////////////////////////////////////////////////////////

//connection.connect();
		
//	showMeProduct();
//------------------------------------------------------------------------------------
	//First function that prints the products. 
	function showMeProduct() {
 	connection.query('SELECT * FROM Bamazon.Products ', function(err, result) {
 			 	if (err) throw err;
 			
 				console.log(colors.red("------Welcome to Bamazon!!------")); 
 				console.log("							");

 			for (var i = 0; i < result.length; i++){
				console.log(result[i].ItemID + " " + "'" + 
						result[i].ProductName + "'" + " " + 
						result[i].DeptmentName + colors.green(" $") + 
						result[i].Price + " " + 
						result[i].StockQuantity + colors.magenta(" Units"));	
		}
})

  		var schema = {
    			properties: {
     	 			product_Id: {
        				message: colors.blue('Select your product by Id'),
        				required: true
      },
     				quantity: {
     					message: colors.blue('How many units of the product would you like to buy?'),
        				required: true
      }

    }

  };
 	prompt.get(schema, function (err, result) {
 				if (err) throw err;
 				

 			var ordering = {
 				ItemID: result.ItemID,
 				quantity: result.StockQuantity

 			};	

 			var selection = result.ItemID;
 			var	amount = result.quantity;

 				// showMeProduct();
 				checkingOut(selection,amount);
 		})

}//end of function showMeProduct
//------------------------------------------------------------------------------------
	//Second function that let the user purchase the products.
	function checkingOut(selection, amount) {
		connection.query('SELECT * FROM Bamazon.Products WHERE ItemID = ' + selection, function(err, result) {
		if (err) throw err;

			var productK = selection -1;

			 if(productK > 0 ){
			 	console.log("Sorry, Not enough in Stock");
			 	
			 } else {
			 	for(var i = 0; i < result.length; i++){
			 		console.log('The ' + result[i].ProductName + 
			 			' cost ' + colors.green(" $") + result[0].Price );
			 		console.log('Your Total is ' + colors.green(" $") + amount * result[productK].Price);
			 	}
			 
		}
		
	})
}
//------------------------------------------------------------------------------------
	//Third Function that updates the Mysql data.
	function updateProduct(selection, amount){
		connection.query('UPDATE Bamazon.Products SET WHERE ? = ItemID = ' + selection, function(err, result) {
			console(selection);
			showMeProduct();
	});

};


