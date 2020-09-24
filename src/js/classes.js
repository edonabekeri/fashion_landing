class User {
  // 1. Variabla ose Atribute
  // 2. Konstruktor
  // 3. Metoda

  constructor(name, surname, dob, email, password) {
    this.firstName = name;
    this.lastName = surname;
    this.dob = dob;
    this.email = email;
    this.password = password;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getDOB() {
    return this.dob;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  login(email, password) {
    if (this.email !== email || this.password !== password) {
      return 'Email or password is wrong';
    }
    //To Do: API call for login
    return 'You are logined succesfully';
  }
}

const user1 = new User(
  'Shyqeri',
  'Gashi',
  '13/09/1997',
  'shyqeri.gashi1@gmail.com',
  'Kosova123'
);
console.log('user1', user1.getFirstName());
// user1.firstName = 'Shyqa';
user1.setFirstName('Shyqa');
console.log('user1', user1.getFirstName());

const user2 = {
  firstName: 'Shyqeri',
  lastName: 'Gashi',
  dob: '13/09/1997',
  email: 'shyqeri.gashi1@gmail.com',
  password: 'Kosova123',
};

let users = [
  new User(
    'Shyqeri',
    'Gashi',
    '13/09/1997',
    'shyqeri.gashi1@gmail.com',
    'Kosova123'
  ),
  new User('Labinot', 'Murati', '13/09/1998', 'labi@gmail.com', 'admin123'),
];

let usersOld = [
  {
    firstName: 'Shyqeri',
    lastName: 'Gashi',
    dob: '13/09/1997',
    email: 'shyqeri.gashi1@gmail.com',
    password: 'Kosova123',
  },
  {
    firstName: 'Labi',
    email: 'labi@gmail.com',
    password: 'admin123',
  },
];

console.log('users', users);
console.log('usersOld', usersOld);

// console.log(user.login('shyqeri.gashi1@gmail.com', 'Kosova123'));
console.log('type of test', typeof users[0]);

let ushqimi = [
  {
    name: 'Domate',
    amount: 2.5,
    isBought: false,
  },
];

const add = (prod) => {
  let exist = false;
  let newPorducts = ushqimi.map((product) => {
    if (product.name === prod.name) {
      exist = true;
      product.amount = product.amount + 1;
    }
    return product;
  });
  if (exist) {
    return newPorducts;
  }
  return newPorducts.push(prod);
};

class MjetiTransportues {
  constructor(id, brand, color) {
    this.id = id;
    this.brand = brand;
    this.color = color;
    this.isEngineOn = false;
  }

  start() {
    this.isEngineOn = true;
  }

  stop() {
    this.isEngineOn = false;
  }
}

class Automjeti extends MjetiTransportues {
  constructor(id, brand, model, isAutomatic, color, hp) {
    super(id, brand, color);
    this.model = model;
    this.isAutomatic = isAutomatic;
    this.hp = hp;
  }

  horn() {
    console.log('horn');
  }
}

class MjetFluturues extends MjetiTransportues {
  constructor(id, brand, model, color) {
    super(id, brand, color);
    this.model = model;
    this.isFlying = false;
  }

  fly() {
    if (!this.isEngineOn) {
      alert("Can't fly airplane");
      return;
    }
    this.isFlying = true;
  }

  land() {
    if (!this.isEngineOn) {
      alert("Can't land airplane");
      return;
    }
    this.isFlying = false;
  }
}

class Airoplani extends MjetFluturues {
  constructor(id, brand, model, color, nrEngine) {
    super(id, brand, model, color);
    this.nrEngine = nrEngine;
  }

  stop() {
    if (this.isFlying) {
      alert("Can't stop airplane");
      return;
    }
    this.isEngineOn = false;
  }

  start() {
    if (this.isFlying) {
      alert("Can't start airplane");
      return;
    }
    this.isEngineOn = true;
  }
}

class Helikopteri extends MjetFluturues {
  constructor(id, brand, model, color, nrHeliks) {
    super(id, brand, model, color);
    this.nrHeliks = nrHeliks;
  }
}

// let a1 = new Automjeti(1, 'BMW', 'M5', true, '#fff', 525);
// let a2 = new Automjeti(2, 'Setra', 'any', false, '#f20000', 200);
// console.log('automjeti 1', a1);
// console.log('automjeti 2', a2);
// a1.start();
// console.log('automjeti 1', a1);
// a1.stop();
// console.log('automjeti 1', a1);
// a1.horn();

// let air1 = new Airoplani(3, 'Boeing', '747', '#fff', 4);
// console.log('air1', air1);

// air1.start();
// air1.fly();
// air1.stop();
// console.log('air1', air1);
