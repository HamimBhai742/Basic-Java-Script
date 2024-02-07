function make_avg(Num) {
    // console.log(Num);
    let sum = 0;
    for (const Number of Num) {
        console.log(Number);
        sum = sum + Number;
        // console.log(sum);
    }
    console.log(Numbers.length);
    let Avarage=sum/Numbers.length;
    return Avarage;
   
}
let Numbers = [54, 75, 86, 42, 35, 84, 69, 71, 25, 67,85,86,97];
Numbers.push(53,47,58)
make_avg(Numbers)
let sum=make_avg(Numbers)
let Avarage=make_avg(Numbers)
console.log(`Avarage Value : ${Avarage.toFixed(2)}`);