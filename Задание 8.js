let setOfValues = new Map([
    ['key', 'prop'],
    [123, 321],
    [true, false]
    ]);

let keys = [];
let values = [];

for (let key of setOfValues.keys()) {
    keys.push(key);
}

for (let value of setOfValues.values()) {
    values.push(value);
}

for (let i = 0; i < setOfValues.size; i++) {
    console.log(`Ключ - ${keys[i]}, значение - ${values[i]}`);
}