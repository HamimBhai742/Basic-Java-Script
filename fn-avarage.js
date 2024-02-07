// function evenAvg(Numbers) {
//     // console.log(Numbers);
//     let evenNum = [];
//     for (let Number of Numbers) {
//         // console.log(Number);
//         if (Number % 2 === 0) {
//             console.log(Number);
//             // sum = sum + Number;
//             evenNum.push(Number);
//         }
//     }
//     let sum = 0;
//     for (let Number of evenNum) {
//         sum = sum + Number;
//         avarage = sum / evenNum.length;
//     }
//     console.log(`Sum of value: ${sum}`);
//     console.log(`Total Number: ${evenNum.length}`);
//     return avarage;
// }
// let Numbers = [43, 54, 82, 97, 94, 39, 72, 63, 84];
// let Avarage = evenAvg(Numbers);
// console.log(`Total Even Avarage: `, Avarage);


// odd Avarage

// function oddAvg(Numbers) {
//     console.log(Numbers);
//     let oddNum = [];
//     for (let Number of Numbers) {
//         if (Number % 2 === 1) {
//             oddNum.push(Number);
//         }
//     }
//     let sum = 0;
//     for (let Number of oddNum) {
//         sum = sum + Number;
//         totalNum = oddNum.length;
//         avarage=sum/totalNum;
//     }
//     console.log(`This Is Odd Array:`,oddNum);
//     return avarage
// }
// let Numbers = [74, 75, 62, 35, 94, 75, 32, 38, 49];
// let Avarage = oddAvg(Numbers);
// console.log(`This Avarage Value Is : ${Avarage}`);


function Avg(Numbers) {
    let Aarray = [];
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] % 2 === 0) {
            Aarray.push(Numbers[i])
        }
    }
    let sum = 0;
    for (let j = 0; j < Aarray.length; j++) {
        sum = sum + Aarray[j]
        Avarage=sum/Aarray.length;
    }
    console.log(Aarray);
    return Avarage
}
let Num = [63, 64, 53, 24, 74, 8, 58, 2, 4, 8];
let avarage = Avg(Num)
console.log(avarage);