import {cube} from './math.js'

console.log('This site is of version:', VERSION)
console.log('This site is of author:', AUTHOR)

if (process.env.NODE_ENV === 'production') {
  console.log('Seems we are in production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Seems we are in development mode')
}

function component() {
  const element = document.createElement('pre')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
