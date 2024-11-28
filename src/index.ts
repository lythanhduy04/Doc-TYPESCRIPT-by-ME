//24 generics
//dùng để tùy biến kiểu dữ liệu nhập vào chưa xác định
// Tại sao không dùng Any? được nhưng không ct không hiểu được kiểu dữ liệu

function fotmatUser<T>(val: T): T {
  console.log(val);
  return val;
}

// let userOne = fotmatUser(5);
// let userTwo = fotmatUser("Hi");

//dùng interfaces làm kiểu dữ liệu

function getRandomArrayValue<T>(value: T[]): T {
  const i = Math.floor(Math.random() * value.length);
  return value[i];
}

interface Users {
  name: string;
  score: number;
}

const users: Users[] = [
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

const randomUser = getRandomArrayValue<Users>(users);
// console.log(randomUser);

//25 intersection

interface Posts {
  title: string;
  content: string;
}
type HadId = {
  id: number;
};

function addId<T>(val: T): T & HadId {
  const id = Math.floor(Math.random() * 6);
  return { ...val, id };
}
const test = addId<Posts>({ title: "bog1", content: "blog2" });
// console.log(test);

//26 Generic trong interface
//nếu không xác định giá trị của biến thì thêm vào
//tùy chỉnh sau này

interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<String> = {
  data: ["Duy", "Cao", "Hoa", "Thinh", "Ba", "Tuy", "Hong"],
  name: "Chuc mung nguoi choi",
};

const collectionTwo: Collection<number> = {
  data: [10, 20, 45, 100, 23, 45, 99, 200],
  name: "So tien nhan duoc",
};

function randomCollectionItems<T>(val: Collection<T>): T {
  const i = Math.floor(Math.random() * val.data.length);
  console.log(val.name + ":");
  return val.data[i];
}

// let testOne = randomCollectionItems(collectionOne);
// console.log(testOne);
// let testTwo = randomCollectionItems(collectionTwo);
// console.log(testTwo);

//27 Generic classes
// viết chương trình quản lí gồm hiển thị một sv bất kì, hiển thị tất cả sinh viên và thêm một sinh viên

interface SinhVien {
  name: string;
  score: number;
}

class QuanLySinhVien<T> {
  constructor(private sv: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.sv.length);
    return this.sv[i];
  }
  loadAll(): T[] {
    return this.sv;
  }
  addSV(val: T) {
    return this.sv.push(val);
  }
}

let dssv: SinhVien[] = [
  { name: "Duy", score: 30 },
  { name: "Cao", score: 30 },
  { name: "Sang", score: 30 },
  { name: "Bin", score: 30 },
];

const quanLySinhVien = new QuanLySinhVien<SinhVien>(dssv);
quanLySinhVien.addSV({ name: "Them", score: 56 });
console.log(quanLySinhVien.loadOne());
console.log(quanLySinhVien.loadAll());
