// import _ from 'lodash'
import printMe from './print.js'

/*
* 1.async function 的返回值是Promise对象(因为await的值有可能成功也有可能失败)
* */
async function getComponent() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  const {default: _} = await import(/*webpackChunkName:'lodash'*/'lodash')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})


