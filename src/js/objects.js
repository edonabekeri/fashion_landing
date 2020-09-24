const carSerialNo = 'DSFKHSDJFKJSDF';
const carBrand = 'BMW';
const carModel = 'F90';
const carProdYear = 2020;
const carHP = 625;
const carIsAutomatic = true;
const carWeight = 1920.22;

const car = {
  serialNo: 'DSFKHSDJFKJSDF',
  brand: 'BMW',
  model: 'F90',
  prodYear: 2020,
  hp: 625,
  isAutomatic: true,
  weight: 1920.22,
  engine: {
    cylinder: 8,
    cc: 4.4,
  },
  isOn: false,
  startEngine: function () {
    if (this.isOn) {
      return 'Engine is already on';
    }
    this.isOn = true;
    return 'Engine has started';
  },
  brake: function () {
    return 'You are with 0 km/h';
  },
};
// console.log('car', car.brand, 'is engine on', car.isOn);

// const res = car.startEngine();
// console.log('res1', res);

// console.log('res2', car.startEngine());

// console.log('carSerialNo', carSerialNo);
// console.log('carBrand', carBrand);
// console.log('carModel', carModel);
// console.log('carProdYear', carProdYear);
// console.log('carHP', carHP);
// console.log('carIsAutomatic', carIsAutomatic);
// console.log('carWeight', carWeight);

// car.brand = 'Benz';
// console.log('car', car.brand);

const me = {
  personalNo: 1235100700,
  firstname: 'Shyqeri',
  lastname: 'Gashi',
  yob: 1997,
  gender: 'M',
  address: 'Pristina',
  isWalking: true,
  isTalking: false,
  talk: function () {
    if (this.isTalking) {
      return 'You are already talking';
    }
    this.isTalking = true;
    return 'You can talk now';
  },
  walk: function () {
    if (this.isWalking) {
      return 'You are already walking';
    }
    this.isWalking = true;
    return 'You can walk now';
  },
  fullName: function () {
    return this.firstname + ' ' + this.lastname;
  },
  calcAge: function (year) {
    return year - this.yob;
  },
};

// console.log('talk func', me.talk());

// console.log('walk func', me.walk());

// console.log('talk func', me.talk());

// console.log("I'm", me.fullName());

// const ageNow = me.calcAge(2020);
// console.log('age', ageNow);

console.log('my name', me.firstname);

// const you = { ...me };
// you.firstname = 'Edona';

const you = {
  ...me,
  firstname: 'Edona',
  gender: 'F',
  smokes: true,
};

console.log('your name', you);
console.log('my name', me);
/*
 ****** Objektet nuk ju kopjohet vlera nese i thu obj2 = obj1 vetem refernecojn ne te njejtin ven ne memorie
 */

// let x = 5;
// let y = x;
// console.log('x', x);
// y = 6;
// console.log('y', y);
// console.log('x', x);
