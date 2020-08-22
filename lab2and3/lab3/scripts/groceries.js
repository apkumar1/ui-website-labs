	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		type: "veg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		type: "grain"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		type: "meat"
	},
	{
		name: "bagel",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.80,
		type: "grain"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 5.80,
		type: "meat"
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.80,
		type: "veg"
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		type: "veg"
	},
	{
		name: "croissant",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 0.99,
		type: "grain"
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.35,
		type: "meat"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35,
		type: "dairy"
	},
	{
		name: "chicken pasta",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 10.99,
		type: "meal"
	},
	{
		name: "cake",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 5.99,
		type: "dessert"
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
	let product_veg = [];
	let product_meat = [];
	let product_dairy = [];
	let product_meal = [];
	let product_dessert = [];
	let product_fruit = [];
	let product_grain = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
			
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "Organic")&&(prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "Vegetarian/GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "Vegetarian/GlutenFree/Organic") && (prods[i].organic == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "Vegetarian/Organic") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
		else if ((restriction == "GlutenFree/Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
			if(prods[i].type== "veg"){
				product_veg.push(prods[i].name);
			}
			if(prods[i].type== "meat"){
				product_meat.push(prods[i].name);
			}
			if(prods[i].type== "dairy"){
				product_dairy.push(prods[i].name);
			}
			if(prods[i].type== "meal"){
				product_meal.push(prods[i].name);
			}
			if(prods[i].type== "dessert"){
				product_dessert.push(prods[i].name);
			}
			if(prods[i].type== "fruit"){
				product_fruit.push(prods[i].name);
			}
			if(prods[i].type== "grain"){
				product_grain.push(prods[i].name);
			}
		}
	}
	return [product_names, product_prices, product_veg, product_meat, product_dairy, product_meal, product_dessert, product_fruit, product_grain] ;
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
