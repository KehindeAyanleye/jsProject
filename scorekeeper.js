//Select the zero button
var total = 0;
//Add an event handler for click
$('#zero').on('click', function() {
	//set the total to zero
	total = 0;
	upDateTotal()
});

//Select the +5 button
$('#add5')
//Add an event handler for click
.on('click', function() {
	//set the total to be
	//total = total +5;
	total = total + 5;
	upDateTotal()
});

//Select the +10 button
$('#add10')
//Add an event handler for click
.on('click', function() {
	//set the total to be total = total +10;
	total = total + 10;
	//result to value
	upDateTotal()
});

//Select the sub1 button
$('#sub1')
//Add an event handler fo click
.on('click', function() {
	//set the total to be total be sub1
	total = total - 1;
	upDateTotal()
});

//Write a funtion that prints the total
//to the DOM
var upDateTotal = function(){
	$('#result').text(total);
};
