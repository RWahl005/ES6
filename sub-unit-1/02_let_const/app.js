// const _list = [0, 1, 2, 3, 4, 5];
// const _items = [4, 5, 6];

// _list.push(..._items);
// console.log(_list);

"use strict";
var a = "Test1";
let b = "Test2";

const testVar = () => {
    var a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log("Other A " + a);
}

console.log(`Logged: ${a}`);
testVar();