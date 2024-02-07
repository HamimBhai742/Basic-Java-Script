// Task1 

// const color={
//     red: "#ff000",
//     blue: "#bl0048",
//     green: "#536445",
//     'golden rod': "#daaa6474"
// }
// color["golden rod"]= "#daa520"
// console.log(color["golden rod"]);


// task2

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car['passenger capasity']=5;
// console.log(car);

// Task3

// const student = {
//     Name:"Hamim",
//     Roll: 658742,
//     Dept:"CST",
//     Physics:{
//         Sub:"HSC Physycs",
//         Teacher:"Sakib",
//         Mark:63
//     }
// }
// console.log(student.Physics.Mark);
// console.log(student['Physics']['Mark']);



// Task4

// const Student = {
//     name:"Hamim",
//     roll:658742,
//     dept:"CST",
//     group:"B",
//     semester:"5th",
//     'Instutite Name': "DPI"
// }
// const keys=Object.keys(Student).length
// const size=Object.values(Student).length
// const size=Object.keys(Student).length
// console.log(size);

// console.log(Student["Instutite Name"]);



// Task5

// let Bio = {
//     Name: "HAMIM",
//     Nationalaty: "Bangladeshi",
//     Relegion: "Islam",
//    'Blod Group': "B+",
//    isstudent: true,
//    age: 19
// }
// const Keys =Object.keys(Bio)
// console.log(Keys);
// for(const Key of Keys ){
//     console.log(Key,':',Bio[Key],('|'),'Type:  ',typeof(Bio[Key]));
// }
// console.log('Count the number of properties.');
// for(const Type in Bio){

//     console.log(Type,':',Bio[Type],'|','Type:  ',typeof(Bio[Type]));
// }


// task1 module 19.5
// let newArray = [];
// function ReversArray(Array) {
//     for (let i = Array.length - 1; i >= 0; i--) {
//         newArray.push(Array[i])
//     }
//     return newArray;
// }
// console.log(ReversArray(['red', 'blue', 'green', 'yellow', 'orange']));

// task2 module 19.5
// let Numbers = [12, 98, 5, 41, 23, 78, 46];
// let EvenNum = [];
// for (let i = 0; i < Numbers.length; i++) {
//     if (Numbers[i] % 2 === 0){
//         EvenNum.push(Numbers[i])
//     }
// }
// console.log(`Even numbers in an array are: ${EvenNum}`);

// odd Num

// let Numbers = [734, 496, 34, 63, 4, 52, 25, 456, 4, 6, 8, 3, 4, 36, 245, 54, 54, 3125, 7, 4587, 6, 32, 3,]
// // console.log(Numbers);
// let OddNum = [];
// for (let j = 0; j < Numbers.length; j++) {
//     if (Numbers[j] % 2 !== 0) {
//         OddNum.push(Numbers[j])
//     }
// }
// console.log(`Odd numbers in an array are: ${OddNum}` );


function Even(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        console.log(Numbers[i]);
        // if (Numbers[i] % 2 === 0) {
        //     EvenNum.push(Numbers[i])
        // }
    }
    // return EvenNum;

}
let EvenNum = [];
let Num = [562, 42, 42, 424, 35, 24,77,67,89,43,45,44,56,]
Even(Num)
// console.log(EvenNum);
// console.log(Even([65, 3757, 353,454,46,353]));
// let Number = [335, 35, 45, 2, 5, 34, 5, 33, 2, 5, 25, 4454, 63]
// let evenNum = [];
// for (let i = 0; i < Number.length; i++) {
//     // console.log(Number[i]);
//     if (Number[i] % 2 === 0) {
//         evenNum.push(Number[i])
//     }
// }
// console.log(evenNum);

// let Number = [534, 35, 43, 24, 3, 1, 5, 1, 4, 5, 5, 6, 8, 3, 2, 67, 65, 32, 56, 26, 7, 43, 2, 1, 27, 8, 90, 9];
// let oddNum = [];
// for (let j = 0; j < Number.length; j++) {
//     if (Number[j] % 2 !== 0) {
//         oddNum.push(Number[j])
//     }
// }
// console.log(oddNum);


// let Num = [563, 56, 24, 26, 5, 894, 5, 53, 6];
// let oddNum = [];
// let i = 0;
// while (i < Num.length) {
//     if (Num[i] % 2 === 1) {
//         oddNum.push(Num[i])
//     }
//     i++;
// }
// console.log(oddNum);

// let num = [634, 45, 42, 86, 563, 2, 145, 24];
// let evenNum = [];
// let j = 0;
// while (j < num.length) {
//     if (num[j] % 2 === 0) {
//         evenNum.push(num[j])
//     }
//     j++;
// }
// console.log(evenNum);