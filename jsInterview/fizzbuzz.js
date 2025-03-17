function fizzbuzz() {
    let str = ""
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            str += "Fizz ";
            continue;
        } else if (i % 5 === 0) {
            str += "Buzz ";
            continue;
        } else if (i % 3 === 0 && i % 5 === 0) {
            str += "FizzBuzz ";
            continue;
        } else {
            str += i + " ";
            continue;
        }
    }
    return str;
}

const ans = fizzbuzz();
console.log(ans);