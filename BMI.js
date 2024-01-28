// BMI Calculation For Health 
var weight=54;
var height=170;
height=height/100;
var BMI=weight/(height**2)
// console.log(BMI.toFixed(2));
if (BMI<18.5){
    console.log("You are underweight");
}
else if(BMI>=18.5 && BMI<=24.9){
    console.log("You are Normal Weight");
}
else if(BMI>=25 && BMI<=29.9){
    console.log("You are overweight");
}
else{
    console.log("You are more over weight");
}