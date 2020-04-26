import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Avatar name = 'golu' id = '1' work = 'Web Developer'/>, document.getElementById('root'));

// 1st Example

// ReactDOM.render(
//   <h1>Heloo World</h1>,
//   document.getElementById('root')
// );

// 2nd example

// const ipsumText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem tenetur totam vel quam voluptatum omnis nihil quasi consequatur nisi iure possimus blanditiis odio, voluptatibus autem sit quo in dolore.'

// const element = (
//   <div>
//       <a href = "#" className = 'button'>Button</a>
//       <div>{ipsumText}</div>
//   </div>
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// 3rd example

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// };

// const fontName = (user) => {
//     return user.firstName + ' ' + user.lastName;
// };

// const user = {
//     firstName: 'Vipul',
//     lastName: 'Jain'
// };

// const element = (
// <h1>Hello {fontName(user)}!</h1>
// );

// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
