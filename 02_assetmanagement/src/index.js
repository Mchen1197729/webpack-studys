import _ from 'lodash'
import './style.css'
import './main.less'
import Icon from './icon.jpg'
import Model from './model.svg'
import data from './data.xml'

console.log(Icon)
console.log(Model)
console.log(data)

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  const icon = new Image()
  icon.src = Icon
  element.appendChild(icon)

  const model = new Image()
  model.src = Model
  element.appendChild(model)

  return element;
}

document.body.appendChild(component());
