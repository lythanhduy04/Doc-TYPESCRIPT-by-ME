"use strict";
//lessson 11 cách sử dụng type
// viết hàm chuyển chuỗi thành số mà ngược lại
function converstId(value) {
    if (typeof value === "string") {
        return parseInt(value);
    }
    if (typeof value === "number") {
        return value.toString();
    }
}
const idOne = converstId("helo");
const idTwo = converstId(1);
// function formatPeople(value: User | Person) {
//   if (value.type === "user") {
//     console.log(value.password);
//   }
//   if (value.type === "person") {
//     console.log(value.id);
//   }
// }
//13 signatures functions
// type Calculator = (a: number, b: number) => number;
// function addTwoNumbers(a: number, b: number) {
//   return a + b;
// }
// function multiplyNumbers(a: number, b: number) {
//   return a * b;
// }
// function joinTwoNumbers(numOne: number, numTwo: number) {
//   return `${numOne}${numTwo}`;
// }
// let cals: Calculator[] = [];
// cals.push(addTwoNumbers);
//Class
// type Base = "classic" | "thick" | "thin" | "garlic";
// class Pizza {
//   constructor(private title: string, private price: number) {}
//   private base: Base = "classic";
//   private toppings: string[] = [];
//   addToppings(topping: string): void {
//     this.toppings.push(topping);
//   }
//   removeTopping(topping: string): void {
//     this.toppings = this.toppings.filter((t) => t !== topping);
//   }
//   selectBase(b: Base) {
//     this.base = b;
//   }
// }
// pizzaOne.addToppings("hanhla");
// pizzaOne.addToppings("tieu");
// pizzaOne.removeTopping("hanhla");
// console.log(pizzaOne, pizzaTwo);
//18 sử dụng class như một kiểu type
function addMushroomPizza(b) {
    for (const c of b) {
        c.addToppings("Mushroom");
    }
}
class MenuItems {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        (this.title = title), (this.price = price);
    }
    get detailMenu() {
        return ` Name: ${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItems {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addToppings(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza("Duy", 30);
const pizzaTwo = new Pizza("Quy", 90);
console.log(pizzaOne.detailMenu);
