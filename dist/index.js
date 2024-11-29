"use strict";
//24 generics
//dùng để tùy biến kiểu dữ liệu nhập vào chưa xác định
// Tại sao không dùng Any? được nhưng không ct không hiểu được kiểu dữ liệu
function fotmatUser(val) {
    console.log(val);
    return val;
}
// let userOne = fotmatUser(5);
// let userTwo = fotmatUser("Hi");
//dùng interfaces làm kiểu dữ liệu
function getRandomArrayValue(value) {
    const i = Math.floor(Math.random() * value.length);
    return value[i];
}
const users = [
    {
        name: "duy",
        score: 40,
    },
    {
        name: "bin",
        score: 99,
    },
    {
        name: "dac",
        score: 20,
    },
    {
        name: "Jounf",
        score: 99,
    },
];
const randomUser = getRandomArrayValue(users);
function addId(val) {
    const id = Math.floor(Math.random() * 6);
    return Object.assign(Object.assign({}, val), { id });
}
const test = addId({ title: "bog1", content: "blog2" });
const collectionOne = {
    data: ["Duy", "Cao", "Hoa", "Thinh", "Ba", "Tuy", "Hong"],
    name: "Chuc mung nguoi choi",
};
const collectionTwo = {
    data: [10, 20, 45, 100, 23, 45, 99, 200],
    name: "So tien nhan duoc",
};
function randomCollectionItems(val) {
    const i = Math.floor(Math.random() * val.data.length);
    console.log(val.name + ":");
    return val.data[i];
}
class QuanLySinhVien {
    constructor(sv) {
        this.sv = sv;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.sv.length);
        return this.sv[i];
    }
    loadAll() {
        return this.sv;
    }
    addSV(val) {
        return this.sv.push(val);
    }
    deleteElement(id) {
        return (this.sv = this.sv.filter((items) => items.id !== id));
    }
}
let dssv = [
    { name: "Duy", score: 30, id: 1 },
    { name: "Cao", score: 30, id: 2 },
    { name: "Sang", score: 30, id: 3 },
    { name: "Bin", score: 30, id: 4 },
];
const quanLySinhVien = new QuanLySinhVien(dssv);
quanLySinhVien.addSV({ name: "Them", score: 56, id: 5 });
console.log(quanLySinhVien.loadOne());
console.log(quanLySinhVien.loadAll());
console.log(quanLySinhVien.deleteElement(2));
