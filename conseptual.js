// function add(x, y){
//     const total=x+y;
//     return total;
// // }
// // console.log(add(43,64));

// // function sub(x,y){
// //     const total= x-y;
// //     return total;
// // }
// // console.log(sub(45,67));

// //no pera meter no return
// function fun1(){
//     console.log("No perameter no return");
// }
// //no pera meter but return
// function fun2(){
//     return 5;
// }
// //pera meter but not return
// function fun3(name){
//     console.log(name);
// }
// //pera meter return
// function fun4(x,y){
//     return x+y;
// }
// // console.log(fun4(56,87));
// console.log(fun3(Hamim));



// function Cheak(x) {
//     if (x % 2 === 0){
//         return 'Even';
//     }
//     else {
//         return 'Odd';
//     }
// }
// console.log(Cheak(7389));

// function For(x){
//     for(i=0;i<x;i++){
//         console.log("Hamim");
//     }
// }
// console.log(For(9));

// function ADD(x,y){
//     if(typeof x!== 'number' || typeof y!=='number'){
//         return 'Thik thak number de sala'
//     }
//     else{
//         return x+y;
//     }
// }
// console.log(ADD('45',45));


function details(info) {
    return `my name is ${info.name}, my age is ${info.age}`
}
console.log(details({name: 'Hamim', age:-876}));