"use strict";
let listNumber = [2, 34, 5, 7];
listNumber.push(3);
console.log(listNumber);
let listFruits = ["apples", "pear", "bananas"];
let listString = ["1", "d", "deb"];
let user = {
    firstName: "duy",
    age: 23,
    score: 34,
};
const none = user.age;
let persons = {
    firstName: "fuy",
    name: true,
};
//function
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(9, 10);
//arow function
const substracTwoNumbera = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c);
    console.log(total);
}
addAllNumbers([2, 4, 1, 1, 1]);
