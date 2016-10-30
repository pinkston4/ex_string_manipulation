
//Variables
var input = document.getElementById("inputField");
var submit = document.getElementById("submit");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

//Event listeners
submit.addEventListener("click", function(event) {
	checkingforNum();
});

input.addEventListener("keyup", function(event) {
	var keyResult = event.which || event.keyCode;
	if (keyResult === 13) {
		checkingforNum();
	}
});


//making sure there are no numbers in the input
function checkingforNum () {
	if (input.value.match(/0, 1, 2, 3, 4, 5, 6, 7, 8, 9/g)) {
		alert("Only letters please");
	} else {
		createTestString();
	}
}

//creating the test string and running program
function createTestString () {
	var testString = input.value.toLowerCase(); 
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
};

function reversal(testString) {
	var stringReversal = testString.split('').reverse().join('');
	output1.innerHTML = stringReversal + "--this is the reverse order of your string";
}

function alphabits(testString) {
	var stringOrder = testString.split('').sort().join('');
	output2.innerHTML = stringOrder + "--this is your string in alphabetical order";
}

function palindrome(testString) {
	if (testString === testString.split('').reverse().join('')) {
		output3.innerHTML = "your string is a palindrome";
	} else {
		output3.innerHTML = "your string is not a palindrome";
	}
}

