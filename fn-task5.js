function even_odd(x) {
    if (x % 2 === 0 && typeof x === 'number') {
        return `${x} is even number`
    }
    else if (x % 2 !== 0 && typeof x === 'number') {
        return `${x} is odd number`
    }
    return `${x} is not a intger number. please chaek your input value`
}
const Ans = even_odd(94609)
console.log(Ans); 