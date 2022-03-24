const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a+b+c;
    }
}

console.log(obj);
console.log(JSON.stringify(obj)); //convert o obj em JSON   

console.log(JSON.parse('{"a": 1, "b": 2, "c":3 }'));
console.log(JSON.parse('{"a": 1, "b": "String", "c":3.75, "d": [] }'))
