// const button = document.querySelector('button');
// console.log(button.getParent);

// const div = document.querySelector('div');
// console.log(typeof div.firstElementChild)
// console.log(typeof div.firstChild)

// innerHTML
// const div = document.querySelector('div');
// const p = document.createElement('p');
// p.innerHTML = `<h2>Footer</h2>`;
// console.log(div.innerHTML);

// Створити список технологій що вивчаються на курсі Fullstack за допомогою js
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// first example
// technologies.forEach(element => {
//     const technology = document.createElement('h3'); // <h3></h3>
//     technology.innerText = element; // <h3>HTML</h3>
//     document.body.append(technology);
// })

// map method
// const elementsArray = technologies.map(element => {
//     return `<h3>${element}</h3>`;
// })
// const markup = elementsArray.join('');
// const markupArea = document.querySelector('.markup')
// markupArea.insertAdjacentHTML('afterbegin', markup);

// reduce method
// const markup = technologies.reduce((acc, currentValue) => {
//     return acc += `<h3>${currentValue}</h3>`;
// }, '')
// const markupArea = document.querySelector('.markup')
// markupArea.insertAdjacentHTML('afterbegin', markup);

// Створити кілька кнопок на основі масива з обєктами використовуючи createElement
// const colors = [
//     {
//         label: "red",
//         color: "#FF0000",
//     },
//     {
//         label: "green",
//         color: "#00FF00",
//     },
//     {
//         label: "blue",
//         color: "#0000FF",
//     },
//     {
//         label: "yellow",
//         color: "#FFFF00",
//     },
// ];
//
// const buttonArea = document.querySelector('.markup')
//
// const buttonElements = [];
// colors.forEach(buttonData => {
//     const button = document.createElement('button');
//     button.textContent = buttonData.label;
//     button.style.backgroundColor = buttonData.color;
//     buttonElements.push(button);
// })
//
// buttonArea.append(...buttonElements);

// insertAdjacentHTML
// let markup = `<h3>New Element</h3>`;
// markup += `<h3>New second Element</h3>`;
//
// const div = document.querySelector('.markup');
// // beforebegin
// div.insertAdjacentHTML('afterend', markup);

// const button = document.getElementById('_2345');
// console.log(button.checked);

// const div = document.querySelector('.markup');
// const element = document.createElement('p');
// element.textContent = 'Hello!!!!';
// div.insertAdjacentElement('afterbegin', element);
