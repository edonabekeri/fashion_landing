// function bashkangjit(attr1, attr2, attr3) {
//   console.log(attr1 + " - " + attr2 + " | " + attr3);
// }
// bashkangjit("Shyqeri", "Gashi", 1997, "Prishtine", "Prishtine");

// const shuma = sum(5, 7);

// function sum(x, y) {
//   const z = x + y;
//   return z;
// }

// console.log("shuma: ", shuma);

// function makeFunc(name) {
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var x = makeFunc("Beetroot Kosovo");
// x();

// const makeAdder = (x) => {
//   return (y) => {
//     return x + y;
//   };
// };
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add2 = makeAdder(2);
// console.log("5 add 15 = ", add5(15));
// console.log("2 add 5 = ", add2(5));

// console.log("2 add 5 = ", makeAdder(2)(5));

// function shumezo(x, y) {
//   return x * y;
// }
// var vlera = shumezo(2, 5);
// console.log("2 * 5 = ", vlera);

// //-----------------------------------

// const shumzo2 = (x, y) => {
//   return x * y;
// };

// const vlera2 = shumzo2(5, 6);
// console.log("5 * 6 = ", vlera2);

// (function (x, y) {
//   const sum = (value1, value2) => {
//     return value1 + value2;
//   };

//   const value = sum(x, y);
//   console.log(x + " + " + y + " = " + value);
// })(5, 10);

// (function () {
//   console.log("shyqa");
// })();

// (() => {
//   console.log("shyqa2");
// })();

//Rekurzioni
// const x = 10;
// const loop = (y) => {
//   console.log("y", y);
//   y++;
//   if (y <= x) {
//     loop(y);
//   }
// };
// loop(1);
// funksioni print, printon nje fjale qe i dergohet si paramter i pare edhe printohet per aq here sa qe ti ja dergon si parameter te dyte
// const print = (print, index) => {
//   let i = 0;
//   while (i < index) {
//     console.log(print);
//     i++;
//   }
// };
// print('Shyqa', 1000);

//D1.
const input = prompt('Type a number');

const factoriel = (input) => {
  let sum = 0;
  for (let i = input; i > 0; i--) {
    sum += i;
  }
  return sum;
};

const res = factoriel(parseInt(input));
console.log('res', res);
