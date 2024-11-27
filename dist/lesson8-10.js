"use strict";
//lesson 8 INTERFACE
const add = (x, y) => x + y;
``;
function RamDomRgb() {
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const c = Math.floor(Math.random() * 255);
    return [a, b, c];
}
let rgbOne = RamDomRgb();
let rgbTwo = RamDomRgb();
// console.log(rgbOne);
// console.log(rgbTwo);
//type
// type User = {
//   name: string;
//   score: number;
// };
// const userOne: User = { name: "duy", score: 89 };
// function formatUser(user: User): void {
//   console.log(`The user ${user.name} has score: ${user.score}`);
// }
// console.log(formatUser(userOne));
