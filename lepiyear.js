// function isLeapYar(year) {
//     if (year % 4 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isLeapYar(1900));

function isLeapYear(Year) {
    if (Year % 100 !== 0 && Year % 4 === 0) {
        return true;
    }
    else if (Year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2022));