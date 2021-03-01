// import _ from 'lodash'
import printMe from './print.js'

printMe()

/*
* 1.async function 的返回值是Promise对象(因为await的值有可能成功也有可能失败)
* */
async function getComponent() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  const {default: _} = await import(/*webpackChunkName:'lodash'*/'lodash')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Greet!'
  const {default: greet} = await import(/*webpackChunkName:'greet'*/'./greet')
  btn.onclick = greet
  element.appendChild(btn)

  return element
}

/*
* async函数返回值都是Promise对象(因为异步任务有可能成功也有可能失败)
* */
getComponent().then(component => {
  document.body.appendChild(component)
})

// 此处展示懒加载的功能
function addElement() {
  let button = document.createElement('button')
  button.innerText = 'hello'
  button.onclick = function () {
    let {default: hello} = import(/*webpackChunkName:'hello'*/'./hello')
    hello()
  }
  document.body.appendChild(button)
}

addElement()


