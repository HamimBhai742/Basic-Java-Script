// for(let n=78;n<=98;n+=2){
//     console.log(n);
// }
// 78 to 98 even number
// for(let N=78;N<=98;N++){
//     if(N % 2 === 0){
//         console.log(N,"Is Even Number");
//     }
// }

// 51 to 85 Even Number Sum
let sum=0;
for (let i = 51; i <= 85; i++) {
    if (i%2 ===0){
        sum=sum+i;
        console.log(i);
    }
}
console.log("Total Even Number Sum :", sum);