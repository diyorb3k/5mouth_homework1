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
