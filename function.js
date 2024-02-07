// function Details() {
//     console.log('My Name Is Hamim');
//     console.log('I am 18 Years Old');
//     console.log('I am a Frontend Web Developer');
//     console.log('Good Bye');
// }
// Details()

// function Add(a, b, c) {
//     if (typeof a !== 'number') {
//         return 'Unable to add'
//     }
//     else if (typeof b !== 'number') {
//         return 'Unable To Add'
//     }
//     else if (typeof c !== 'number') {
//         return 'UNABLE TO ADD'
//     }
//     else {
//         let total = a + b + c;
//         return total;
//     }
// }
// console.log(Add(true,78,88));

// function Sub(x, y, z) {
//     let substraction = x - z - y;
//     return substraction;
// }
// console.log(Sub(75,-98,87));

// function Multiple(X){
//     let Squre=X*X;
//     console.log(`The square root of ${X} is ${Squre}`);
// }
// Multiple(48)


// function Mojo(pis,price){
//     let total= pis*price;
//     console.log(`${pis} Coca-Colas cost ${total} taka`);
// }
// let Pis= 54;
// let Price=98;
// Mojo(Pis,Price)

// function bzartk(x, y, z) {
//     if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//         return 'Hesab too gorbor hoyr gelo'
//     }
//     else {
//         let totalCost = x + y;
//         let Return = z - totalCost;
//         return Return;
//     }
// }
// let Hesab = bzartk('55', 344, 1000);
// console.log(Hesab);

// function Payment(x, y, z) {
//     let bill = x + y + z;
//     let discount = bill * 0.25;
//     let payment = bill - discount;
//     let tips = 435;
//     let totalPayment= payment+tips;
//     return totalPayment;
// }
// let totalBill = Payment(655, 753, 643)
// console.log(totalBill);


// function isNaN(x) {
//     if (typeof x === 'number'){
//         return `${x} isNumber`;
//     }
//     return 'isNaN';
// }
// console.log(isNaN(367));


// function isEvenOrOdd(y){
//     if(y%2===0){
//         return `${y} is Even Number`
//     }
//     else{
//         if(typeof y !== 'number'){
//             return `${y} is Invalid`
//         }
//     }
//     return `${y} is Odd Number`
// }
// console.log(isEvenOrOdd(76));

function isNum(x, y) {
    if (y === true && typeof x === 'number') {
        let doDuble = `X * 2 : ${x * 2}`;
        return doDuble;
    }
    else if (y === false  && typeof x === 'number') {
        return `X * 3 : ${x * 3}`
    }
    else if(typeof y !== 'boolean' ){
        return `${y} This value is invalid`
    }
    return `${x} This value is invalid`
}
console.log(isNum('6=4',true));