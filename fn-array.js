// function SumNumOfArray(Numbers) {
//     // console.log(Numbers);
//     let sum = 0;
//         for (const Number of Numbers) {
//             console.log(Number);
//             if (Number % 2 === 0 && typeof Number === 'number') {
//                 sum = sum + Number;
//             }
//         }
//     return sum;
// }
// let Num = [53, 77, 54, 59, 56, 58, 91, 42, 65,43];
// Num.push(64, 45, 87);
// Num.pop();
// let sum = SumNumOfArray(Num);
// console.log(`Total Sum of Value : ${sum}`);

function sumOfArray(Numbers) {
    // console.log(Numbers);
    console.log(Numbers.length);
    console.log('--------------');
    let Sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
       console.log(Numbers[i]);
        if (Numbers[i] % 2 === 0) {
            Sum = Sum + Numbers[i];
        }
    }
    return Sum;
}
let Num = [73, 74, 75, 92, 64, 95, 87, 72, 64, 57]
Num.push(54, 75, 86, 72)
let Sum = sumOfArray(Num)
console.log(`Value Of Sumation : ${Sum}`);

