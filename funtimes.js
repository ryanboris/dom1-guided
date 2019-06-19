// //createElement = make a new HTML element
// const h1 = document.createElement('h1');
// const div = document.createElement('div');
// console.log('div', div);

// const button = document.createElement('button');
// console.log('button', button);

// const nav = document.createElement('nav');
// console.log('nav', nav);

// for (let i = 0; i <= 4; i++) {
//   console.log(document.createElement('a'));
// }

// //Select a part of the DOM to attach!
// //1
// const body = document.querySelector('body');
// //2 Attach to the selected element
// //attach a child! (appendChild)

// //Parent.appendChild(Child)
// body.appendChild(div);
// div.className = 'container';
// div.style.border = '2px dotted rebeccapurple';

// div.appendChild(h1);
// h1.textContent = 'My Super Fun Page';
// h1.style.textAlign = 'center';
// h1.style.textTransform = 'uppercase';

// body.appendChild(button);
// button.textContent = 'Click me!';
// h1.textContent = parseInt('3')

import React from 'react';

function App() {
  return (
    <h1>
      <div>Hey!</div>
    </h1>
  );
}
