	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "bagel",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.80
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 5.80
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.80
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "croissant",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 0.99
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "chicken pasta",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 10.99
	},
	{
		name: "cake",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 5.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	prods.sort(function (a, b) {
	  return a.price - b.price;
	});
	let product_names = [];
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Organic")&&(prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Vegetarian/GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Vegetarian/GlutenFree/Organic") && (prods[i].organic == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Vegetarian/Organic") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree/Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
	}
	return [product_names, product_prices] ;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
