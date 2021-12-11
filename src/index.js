import './style.css';

function component() {
  const element = document.createElement('div');
  element.textContent = 'Hello Webpack';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
