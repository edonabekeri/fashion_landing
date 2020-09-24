document.body.style.backgroundColor = '#f20000';
// console.log('offsetWidth', document.body.offsetWidth);
// console.log('document.body.innerHTML', document.body.innerHTML);
// document.body.innerHTML = '<div>test</div>';
// console.log('document.body.innerHTML', document.body.innerHTML);
// document.body.append('<div>new html</div>');
// console.log('document.documentElement', document.documentElement);
// console.log('childNodes', document.body.childNodes);

const btn1 = document.getElementById('btn1');
console.log('btn1', btn1);
btn1.style.color = 'red';
btn1.innerHTML = '<span>Buttoni</span>';

const spans = document.getElementsByTagName('span');
let index = 0;
while (spans.length > index) {
  if (spans[index++].innerHTML === 'test1') {
    console.log('testttt');
  }
  console.log('span', spans[index++]);
}

const boxes = document.querySelectorAll('.box'); // returns array

console.log('boxes');
index = 0;
while (boxes.length > index) {
  if (index % 2 === 0) {
    boxes[index].style.backgroundColor = 'blue';
  }
  index++;
}

const firstBox = document.querySelector('.main_footer .box'); // one item
console.log('firstBox', firstBox);
firstBox.style.color = 'white';
