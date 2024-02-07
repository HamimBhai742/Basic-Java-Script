// inch To Feet 

// function incToFeet(inch) {
//     let Feet = inch / 12;
//     return Feet;
// }
// console.log(incToFeet(78).toFixed(2));

function Height(inch) {
    let Feet = inch / 12;
    let heightFeet = parseInt(Feet);
    let heightInch = inch % 12;
    if(heightFeet>=5 && heightFeet<=7){
        console.log('This Is Perfect Height For Man');
    }
    else if(heightFeet>7){
        console.log('This Height Is Not Any Man');
    }
    else{
        console.log('This Height Is Not Perfect For Man So Taratari Jule Ja Tar Por Lomba Hoye Ja');
    }
    return `Height: ${heightFeet} Feet ${heightInch} Inch`
}
console.log(Height(84));
// //Feet to Inch

// function feetToInch(Feet) {
//     let Inch = Feet * 12;
//     return Inch;
// }
// console.log(feetToInch(5));


// //Kilometer To Meter

// // function kiloToMeter(Kilo){
// //     let Meter=Kilo*1000;
// //     return Meter;
// // }
// // console.log(kiloToMeter(75));


// function kiloToMile(Kilo) {
//     let Mile = Kilo * 0.621371192;
//     return Mile;
// }
// console.log(kiloToMile(34).toFixed(2));


//Meter To Feet

// function meterToFeet(Meter){
//     let Feet=Meter*3.28;
//     return Feet;
// }
// console.log(meterToFeet(10));

//feet to meter

// function feetToMeter(Feet) {
//     let Meter = Feet / 3.28;
//     return Meter;
// }
// console.log(feetToMeter(92).toFixed(2));