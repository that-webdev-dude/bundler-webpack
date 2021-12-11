import './style.css';
import Pic from './web-dev-dude.jpg';

function component() {
  // main div
  const element = document.createElement('div');
  element.textContent = 'Hello Webpack';
  element.classList.add('hello');

  // add image
  const myPic = new Image();
  myPic.src = Pic;
  element.appendChild(myPic);

  return element;
}

document.body.appendChild(component());
