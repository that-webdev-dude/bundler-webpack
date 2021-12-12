import './styles/style.scss';
import Pic from './images/web-dev-dude.jpg';
import print from './print';

function component() {
  const element = document.createElement('div');
  element.textContent = 'Hello Webpack';
  element.classList.add('hello');

  const myPic = new Image();
  myPic.src = Pic;
  element.appendChild(myPic);

  const btn = document.createElement('button');
  btn.textContent = 'check me!';
  btn.onclick = print;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
