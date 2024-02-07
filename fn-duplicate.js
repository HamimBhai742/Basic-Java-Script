// function Duplicate(Nam) {
//     let newFriends=[];
//     for(let Name of friends){
//      if(newFriends.includes(Name) === false){
//         newFriends.push(Name)
//      }
//     }
//     console.log(Nam);
//     return newFriends
// }
// let friends= ['sakib', 'rakib', 'takib', 'sakib', 'pokib', 'rakib', 'rokib', 'pokib']
// console.log(Duplicate(friends));


// function duplicate(x) {
//     let newNumbers = [];
//     for (let i = 0; i < Numbers.length; i++) {
//         if (newNumbers.includes(x[i]) === false){
//             newNumbers.push(x[i])
//         }
//     }
//     return newNumbers;
// }
// let Numbers = [5, 9, 8, 2, 5, 6, 3, 4, 9, 7, 5, 5, 4, 7, 5, 6,]
// let Dupli = duplicate(Numbers)
// console.log(Dupli);


function Dup(X) {
    // console.log(X);
    let updateData = [];
    for (let bangladsh of mixd) {
        // console.log(bangladsh);
        if (updateData.includes(bangladsh) ===false){
            updateData.push(bangladsh);
        }
    }
    console.log(`First Entry Data : ${mixd}`);
    return `Update Data and Sloved all Problem : ${updateData}`
}
let mixd = ['dhaka', 'borishal', 'khulna', 'dhaka', 'rongpur', 'khulna', 'dhaka', 'rongpur', 9, 4, 5, 4, 3, 7, 8, 6, 7, 4, 6, 9, 2]
mixd.push('etc')
let Dupli = Dup(mixd)
console.log(Dupli);