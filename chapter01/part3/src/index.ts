import { hi } from './m1';

function sum(a: number, b: number): number {
    return a + b;
}

const obj = { name: "tony", age: 33 };

console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log('haha');
console.log(hi);

let fn = (a: number, b: number): number => a + b;

fn(123, 456);
fn(1, 2);

// console.log(Promise);