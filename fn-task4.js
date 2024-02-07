function count_Zero(s) {
    let ctn = 0;
    for (let i = 0; i < Binary.length; i++) {
        if (s[i] === '0'){
            ctn++;          
        }
    }
    return ctn;
}
let Binary = '10001001';
let s = count_Zero(Binary);
console.log(`Count Zero: ${s}`);


function countZero(x) {
    let ctn = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== '1') {
            ctn++;
        }
    }
    return ctn;
}
let binary = '1010001000101001';
let Count = countZero(binary);
console.log(`Count Zero: ${Count}`);

