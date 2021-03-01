function getComponent() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = async function () {
    const {default: printMe} = await import(/*webpackChunkName:'print'*/'./print')
    console.log(printMe)
    printMe()
  }
  element.appendChild(btn)

  return element
}

document.body.appendChild(getComponent())


