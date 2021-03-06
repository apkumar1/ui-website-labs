
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray1 = restrictListProducts(products, s1.value);
	var optionArray = optionArray1[0];
	var priceArray = optionArray1[1];
	var veg = optionArray1[2];
	var meat = optionArray1[3];
	var dairy = optionArray1[4];
	var meal = optionArray1[5];
	var dessert = optionArray1[6];
	var fruit = optionArray1[7];
	var grain = optionArray1[8];
	
		// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
		// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
		
	
	// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		var txt1 = "Based on your choices, here is what we have:";
		label.appendChild(document.createTextNode(txt1));
		s2.appendChild(label);
	
	// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	
	//create button
	var btn = document.createElement("label");
	btn.appendChild(document.createTextNode("VEGETABLES: "));
	for (a = 0; a<veg.length; a++){
		
		btn.appendChild(document.createTextNode(veg[a]));
		btn.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn2 = document.createElement("label");
	btn2.appendChild(document.createTextNode("MEAT: "));
	for (a = 0; a<meat.length; a++){
		btn2.appendChild(document.createTextNode(meat[a]));
		btn2.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn2);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn3 = document.createElement("label");
	btn3.appendChild(document.createTextNode("DAIRY: "));
	for (a = 0; a<dairy.length; a++){
		btn3.appendChild(document.createTextNode(dairy[a]));
		btn3.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn3);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn4 = document.createElement("label");
	btn4.appendChild(document.createTextNode("COOKED MEALS: "));
	for (a = 0; a<meal.length; a++){
		btn4.appendChild(document.createTextNode(meal[a]));
		btn4.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn4);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn5 = document.createElement("label");
	btn5.appendChild(document.createTextNode("DESSERT: "));
	for (a = 0; a<dessert.length; a++){
		btn5.appendChild(document.createTextNode(dessert[a]));
		btn5.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn5);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn6 = document.createElement("label");
	btn6.appendChild(document.createTextNode("FRUITS: "));
	for (a = 0; a<fruit.length; a++){
		btn6.appendChild(document.createTextNode(fruit[a]));
		btn6.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn6);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	//create button
	var btn7 = document.createElement("label");
	btn7.appendChild(document.createTextNode("GRAINS: "));
	for (a = 0; a<grain.length; a++){
		btn7.appendChild(document.createTextNode(grain[a]));
		btn7.appendChild(document.createTextNode("  "));
	}
	s2.appendChild(btn7);
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	// create a breakline node and add in HTML DOM
	s2.appendChild(document.createElement("br"));
	
	// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		var txt2 = "Select the products below:"
		label.appendChild(document.createTextNode(txt2));
		s2.appendChild(label);


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
		
		
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		
		
		
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		
		//price added
		var price = priceArray[i];
		var price2 = price.toString();
		//new label for price
		var label2 = document.createElement('label')
		label2.htmlFor = price;
		label2.appendChild(document.createTextNode("$"));
		label2.appendChild(document.createTextNode(price));
		s2.appendChild(label2);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		
		var name1 = optionArray[i];
		var name2 = productName;
		var name = name2.toString();
		var str = "../../lab3/scripts/images/"+name2+".jpg";
		var str2 = String(str);
		var x = document.createElement("IMG");
		  x.setAttribute("src", str2);
		  x.setAttribute("width", "300");
		  x.setAttribute("height", "300");
		  s2.appendChild(x);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

