var a=534;
var b=5;
var c=534%5;
console.log("remainder :",c);

// Remainder Chaek

var A=753;
var B=5;
var C=A%B;
console.log("Remainder :",C);

var age= 16;
age +=10;
age -=6;
age *=2;
age /=2;
console.log("Age :",(age));
var name= "Hamim"
var Roll= "65874"
console.log("Name :",isNaN(name),isNaN(Roll));

var x=-654;
var y=0;
var z=x/y;
console.log("Total division :",(z));
   

// Avarge Mark
function calculateAverage(values) {
    // Check if the array is empty
    if (values.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    // Calculate the sum of all values
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    // Calculate the average
    var average = sum / values.length;
    return average;
}


var Mark=[65,76,87,74,53,98,65,65,74,95];
var avg=calculateAverage(Mark);
console.log("Avarage Mark :",avg);