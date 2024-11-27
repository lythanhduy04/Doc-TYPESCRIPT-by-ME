//lesson 8 INTERFACE

// interface Author {
//   name: string;
//   avatar: string;
// }

// const authorOne: Author = {
//   name: "duy",
//   avatar: "./src/img.png",
// };

// interface Posts {
//   title: string;
//   body: string;
//   tags: string[];
//   create_at: Date;
//   author: Author;
// }

// const newPost = {
//   title: "less1",
//   body: "less1'number','Xin chaof'",
//   tags: ["number", "Xin chaof"],
//   create_at: new Date(),
//   author: authorOne,
// };

// function createPost(post: Posts): void {
//   console.log(`Created post ${post.title} by ${post.author.name}`);
// }

// createPost(newPost);

//lessson 9

//FC i

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => x + y;

// interface Rgb {
//   a: number;
//   b: number;
//   c: number;
// }

// function RamDomRgb(): Rgb {
//   const a = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const c = Math.floor(Math.random() * 255);
//   return { a, b, c };
// }

// let rgbOne = RamDomRgb();
// let rgbTwo = RamDomRgb();
// console.log(rgbOne);
// console.log(rgbTwo);

type Rgb = [r: number, g: number, b: number];
``;
function RamDomRgb(): Rgb {
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
