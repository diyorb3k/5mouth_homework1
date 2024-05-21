// DARSDA-1 ////////////////
// String.prototype.lowerCase = function () {
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     let code = this[i].codePointAt();
//     if (code >= 65 && code < 97) {
//       str += String.fromCharCode(code + 32);
//     } else {
//       str += this[i];
//     }
//   }
//   return str;
// };

// let greeting = "Hello NEW World";
// console.log(greeting.lowerCase());
// 1-masala
// String.prototype.trm = function () {
//   let trim;
//   return this.trim();
// };
// let rusult = " salom ";
// console.log(rusult.trm());

// 2-masala
// String.prototype.upperCase = function () {
//   let upper = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
//   let lower = "abcdefghijklmnopqrstuvwxyz";
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     let el = this[i];
//     if (lower.includes(el)) {
//       el = upper[lower.indexOf(el)];
//     }
//     str += el;
//   }
//   return str;
// };
// let arr = "john doe";
// let result = arr.upperCase();
// console.log(result);

// 3-masala
// Array.prototype.has = function (item) {
//   let includes;
//   return this.includes(item);
// };
// const fruits = [`banan`, `orangi`, `apple`, `mango`];
// console.log(fruits.has());
// 4-masala
// Array.prototype.cut = function (item) {
//   let slice;
//   return this.slice(item);
// };
// const newStr = ["banan", "salom"];
// console.log(newStr[1].slice());

// 5--chi masala
// String.prototype.rpt = function (str) {
//   let repeat;
//   return this.repeat(str);
// };
// let hisob = " salom ";
// console.log(hisob.rpt(5));

// Number constructoriga quyidagi metodlarni qo’shing.
// 3-masalaaa
// Number.prototype.isSquare = function() {
//     const sqrt = Math.sqrt(this);
//     return Number.isInteger(sqrt);
// };
// console.log(`10 is square: ${10 .isSquare()}`); // 10 is square: false
// console.log(`16 is square: ${16 .isSquare()}`); // 16 is square: true
// console.log(`25 is square: ${25 .isSquare()}`); // 25 is square: true
// console.log(`37 is square: ${37 .isSquare()}`); // 37 is square: false

//Array constructoriga quyidagi metodlarni custom variantini qo’shing.///
// 1-masalaa
// Array prototypega customMap metodini qo'shish
// Array.prototype.customMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const fruits = ["banan", "orangi", "apple", "mango"];

// const newFruits = fruits.customMap((fruit, index) => {
//   return `${index + 1}. ${fruit}`;
// });

// console.log(newFruits);
// 2-masaall
// Array.prototype.customEvery = function(callback, thisArg) {
//     const context = thisArg || this;

//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             if (!callback.call(context, this[i], i, this)) {
//                 return false;
//             }
//         }
//     }

//     return true;
// };

// const array = [1, 2, 3, 4, 5];

// const allGreaterThanZero = array.customEvery(function(element) {
//     return element > 0;
// });

// console.log(allGreaterThanZero);
// 4-masalaaa
// Array.prototype.customFindIndex = function(callback, thisArg) {
//     const context = thisArg || this;

//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             if (callback.call(context, this[i], i, this)) {
//                 return i;
//             }
//         }
//     }

//     return -1;
// };

// const array = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// const index = array.customFindIndex(isLargeNumber);

// console.log(index);

// const indexNotFound = array.custom
///////// 5 - masalll;////////////////////
// Constructorlar yaratilsin.
// 1 - masalaa;
// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }

// Animal.prototype.info = function () {
//   return `Name: ${this.name}, Speed: ${this.speed} km/h, Limit Age: ${this.limitAge} years`;
// };
// const cheetah = new Animal("Cheetah", 120, 15);
// const elephant = new Animal("Elephant", 25, 70);

// console.log(cheetah.info());
// console.log(elephant.info());
// 3-masala
// function Person(name, age, currentYear) {
//     this.name = name;
//     this.age = age;
//     this.currentYear = currentYear;
// }
// Person.prototype.g = function() {
//     return this.currentYear - this.age;
// };
// const person1 = new Person('Alice', 20, 2024);
// const person2 = new Person('Bob', 30, 2024);
// console.log(`${person1.name} was born in ${person1.g()}`);
// console.log(`${person2.name} was born in ${person2.g()}`);
// 5- masalll;
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.getArea = function() {
//     return this.width * this.height;
// };
// Rectangle.prototype.getPerimeter = function() {
//     return 2 * (this.width + this.height);
// };
// const rect1 = new Rectangle(5, 10);
// const rect2 = new Rectangle(7, 3);

// console.log(`Area of rect1: ${rect1.getArea()}`);
// console.log(`Perimeter of rect1: ${rect1.getPerimeter()}`);

// console.log(`Area of rect2: ${rect2.getArea()}`);
// console.log(`Perimeter of rect2: ${rect2.getPerimeter()}`);
