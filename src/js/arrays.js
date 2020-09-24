let names = ['Labi', 'Gentrit', 'Shpetimi'];
// console.log('names', names);
// names.pop();
// names.push('Drinor', 'Edona');
const newNames1 = ['Argton', 'Londi', 'Endrit'];
const newNames2 = ['Drinor', 'Edona'];
names = names.concat(newNames1, newNames2);
// console.log('names', names);
// console.log('name in position 2: ', names[2]);

console.log('names - 1', names);

console.log('shift', names.shift());
console.log('names - 2', names);

console.log('unshift', names.unshift('Labi'));
console.log('names - 3', names);

console.log('indexof', names.indexOf('Shpetimi'));

const indexToRemove = names.indexOf('Shpetimi');
console.log('splice', names.splice(indexToRemove, 1));
console.log('names - 4', names);
names = names.sort();
console.log('names - 5', names);

const sortedNumbers = [200, 2, 1600, 28, -20, 90].sort((a, b) => a - b);
console.log('test sort numbers', sortedNumbers);

const printStudentNames = () => {
  //   let index = 0;
  //   do {
  //     console.log(index, names[index++]);
  //   } while (index < names.length);

  //   while (index < names.length) {
  //     console.log(index, names[index++]);
  //   }

  //   for (let index = 0; index < names.length; index++) {
  //     console.log(names[index]);
  //   }

  names.forEach((name) => {
    console.log(name);
  });
};
// printStudentNames();

// console.log('last element: ', names.length, names[names.length - 1]);

let students = [
  {
    id: 2,
    firstName: 'Gentrit',
    lastName: 'Bytyqi',
    yob: 1999,
    course: 'AJ',
  },
  {
    id: 1,
    firstName: 'Labinot',
    lastName: 'Murati',
    yob: 1998,
    course: 'FE',
  },
  {
    id: 3,
    firstName: 'Argton',
    lastName: 'Zekaj',
    yob: 2005,
    course: 'FE',
  },
];

const getStudentsByCourse = (course) => {
  let arr = [];
  students.forEach((student) => {
    if (student.course === course) {
      arr.push(student);
    }
  });
  return arr;
};

const sortedStudents = students.sort(function (a, b) {
  const nameA = a.firstName;
  const nameB = b.firstName;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

// console.log('sortedStudents', sortedStudents);

// console.log('students', students);
// console.log('getAJStudents', getStudentsByCourse('FE'));

// const FEStudents = students.map((student) => {
//   if (student.course === 'FE') {
//     return student;
//   }
// });
// console.log('FEStudents', FEStudents);

const FEStudents = students.filter((student) => {
  student = {
    ...student,
    yearOfJoined: 2020,
  };
  return student.course === 'FE';
});
console.log('students', students);
console.log('FEStudents', FEStudents);
