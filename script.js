const input = document.querySelector('#fruit');//get the search bar/input field
const suggestions = document.querySelector('.suggestions');//get the div that contains the suggestion drop down list

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//this will gather the fruits that match the user input
function search(str) {
	let results = fruit.filter((f) => {							//results now equal the result of the filter method instead of an empty array
		return f.toLowerCase().includes(str.toLowerCase());		//convert individual fruit strings to lowercase, check (true or false) if any characters from the user input (converted to lowercase) are included in the fruit string
	});
	showSuggestions(results, str);								//pass the filtered array and user input to the showSuggestions function and call it
};

//this will handle an event related to key presses
function searchHandler(e) {										//did not need to utilize the event handler
	search(input.value);										//on every 'keyup', call the search function on the current user input
}

//this will dictate which suggestions are shown
function showSuggestions(results, inputVal) {					//this function is called by the search function
	const listed = results.map((result) =>{						//map "results" array into new "listed" array where each element is converted into HTML <li> elements containing each fruit string
			if(inputVal !== ''){								//only if the input value is not an empty string
			return "<li>" + result + "</li>";					//concatenate the <li> tags to the given element
			}
		});
	suggestions.innerHTML = "<ul>" + listed.join('') + "</ul>";	//create and NEST (innerHTML) a <ul> element in the "suggestions" <div> that will contain the entire "listed" array of <li>'s, use join('') to remove commas
};

//this will handle an event related to choosing a suggestion
function useSuggestion(e) {
	input.value = e.target.innerText;							//when a suggestion is chosen and clicked, the target suggestion replaces the user input
	suggestions.innerHTML = '';									//clear the suggestions <div> after a suggestion is chosen
}

input.addEventListener('keyup', searchHandler);//listens for a key release in the user input field and calls searchHandler every time a key is released
suggestions.addEventListener('mouseup', useSuggestion);//listens for a mouse release in the suggestions <div>, then calls useSuggestion 
//**note on suggestions event listener**-->'click' resulted in unwanted behavior where if the user held the click and dragged across multiple suggestions, they would all be added