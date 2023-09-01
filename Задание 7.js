let oddOrEven = [0, 1, 3, 3, 8, 123, 15, 34, 55, 'shit', NaN, undefined, true];
let newArr = [];
let even = 0, odd = 0, zero = 0;
for (let i = 0; i < oddOrEven.length; i++) {
    if (typeof oddOrEven[i] == 'number' && oddOrEven[i] != NaN && oddOrEven[i] == 0) {
        even += 1;
    }
    if (typeof oddOrEven[i] == 'number' && oddOrEven[i] != NaN && oddOrEven[i] % 2 == 0) {
        even += 1;
    }
    if (typeof oddOrEven[i] == 'number' && oddOrEven[i] != NaN && oddOrEven[i] % 2 != 0) {
        odd += 1;
    }
}
console.log(even, odd, zero);