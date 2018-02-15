import logo from './assets/logo'
import swiftRight from 'utils/swift-right'
import swiftLeft from 'utils/swift-left'
import swiftUp from 'utils/swift-up'
import popOut from 'utils/pop-out'
import bounce from 'utils/bounce'

const loadMenu = () => new Promise(resolve => {
  const app = document.querySelector('.app')
  app.innerHTML = logo
  const jan = document.querySelector('.jan')
  const ken = document.querySelector('.ken')
  const fight = document.querySelector('.fight')
  const logotype = document.querySelector('.logotype')
  const foreground = document.querySelector('.foreground')
  const background = document.querySelector('.background')

  swiftRight(jan)
    .then(() => Promise.all([swiftLeft(ken), swiftUp(fight)]))
    .then(() => Promise.all([bounce(logotype), popOut(background), popOut(foreground)]))
    .then(() => resolve())
})

export default loadMenu
