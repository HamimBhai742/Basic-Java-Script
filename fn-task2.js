function multipleOrDived(x) {
    if (x % 2 === 0) {
        return `${x} is even number so divied by two: ${x / 2}`;
    }
    return `${x} is odd number so multiply by two: ${x*2}`;
}
const Number=multipleOrDived(56);
console.log(Number);