let listNumber: number[] = [2, 34, 5, 7];
listNumber.push(3);
console.log(listNumber);

let listFruits: string[] = ["apples", "pear", "bananas"];

let listString = ["1", "d", "deb"];

let user: { firstName: string; age: number; score: number } = {
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
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

addTwoNumbers(9, 10);

//arow function

const substracTwoNumbera = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]) {
  const total = items.reduce((a, c) => a + c);
  console.log(total);
}

addAllNumbers([2, 4, 1, 1, 1]);
