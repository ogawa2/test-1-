'use strict';

{

// const text = document.querySelector('input[type="text"]');
// const textarea = document.querySelector('textarea');

// console.log(text.value);
// console.log(textarea.value);

// text.focus();
// text.select();
// text.disabled = true;
// textarea.disabled = true;

// console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
// console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);
// document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
console.log(document.querySelectorAll('input[type="radio"]')[1].checked);
document.querySelectorAll('input[type="radio"]')[1].checked = true;

console.log(document.querySelectorAll('select > option')[0].selected);
console.log(document.querySelectorAll('select > option')[1].selected);
console.log(document.querySelectorAll('select > option')[2].selected);

document.querySelectorAll('select > option')[2].selected = true;

}
