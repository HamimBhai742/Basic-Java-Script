// for (let i = 1; i <= 40; i++) {
//     if (i % 2 === 1) {
//         continue
//     }
//     console.log(i,"Is Even Number");
// }


// let j=1;
// while(j<=40){
//     j++;
//     if(j%2===1){
//         continue
//     }
//     console.log(j,"Is Even Number");
// }

// for (let m = 55; m <= 85; m++) {
//     if (m % 5 === 0 || m % 2 === 0) {
//         continue
//     }
//     console.log(m);
// }

let n = 55;
while (n <= 85) {
    n++;
    if (n % 2 === 0 || n % 5 === 0) {
        continue
    }

    console.log(n);
}