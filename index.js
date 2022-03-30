function createSnowflake() {
  const div = document.createElement('div')
  div.classList.add('snowflake')
  div.style.position = 'absolute'
  return div
}

const width = window.innerWidth

const arrayOfSnowflakes = [...new Array(Math.floor(width / 5)).fill(createSnowflake())]

arrayOfSnowflakes.forEach((item) => {
  item.style.top = `${Math.floor(Math.random() * 100)}vh`
  item.style.left = `${Math.floor(Math.random() * 100)}vw`
  item.style.width = `${Math.floor(Math.random() * 10 + 6)}px`
  item.style.heigth = `${Math.floor(Math.random() * 10 + 6)}px`
  item.style.borderRadius = `
    ${Math.floor(Math.random() * 50 + 35)}% 
    ${Math.floor(Math.random() * 50 + 35)}% 
    ${Math.floor(Math.random() * 50 + 35)}% 
    ${Math.floor(Math.random() * 50 + 35)}%`
  document.body.insertAdjacentHTML('afterbegin', item.outerHTML)
})

const snowflakes = document.querySelectorAll('.snowflake')

snowflakes.forEach(item => {
  let time = Math.floor(Math.random() * 5000 + 5000)
  let delay = Math.floor(Math.random() * 20000)

  item.style.transition = `${time}ms linear`
  item.style.animation = `fallen ${time}ms linear infinite ${delay}ms`

  setInterval(() => {
    let initialLeft = Number(item.style.left.replace('vw', ''))
    let initialTop = Number(item.style.top.replace('vh', ''))
   
    item.style.left = `${initialLeft - Math.floor(Math.random() * 5 - 2)}vw`
    item.style.top = `${initialTop - Math.floor(Math.random() * 5 - 2)}vh`
    item.style.transition = `${time}ms linear`
  }, time)
})











