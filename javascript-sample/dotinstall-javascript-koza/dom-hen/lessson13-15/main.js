'use strict';

{

    // const button = document.querySelector('button');

    // button.addEventListener('mouseover', () => {
    //     console.log('clicked!');
    //     const img = document.createElement('img');
    //     img.src = "a.jpg"
    //     document.body.appendChild(img);
    // });

// const div = document.querySelector('div');

// div.addEventListener('mousemove', e => {
//     div.textContent = `${e.clientX}:${e.clientY}`;
// });

const a = document.querySelector('a');
const span = document.querySelector('span');

a.addEventListener('click', e => {
    e.preventDefault(); //ページ遷移しない（タグの既定の効果を無効化する）
    a.classList.add('hidden');
    span.classList.remove('hidden');
});





}
