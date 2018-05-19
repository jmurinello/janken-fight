import menu from './menu'
import animate from 'lib/animate-engine'

const loadMenu = () => new Promise(resolve => {
  const app = document.querySelector('.app')
  app.insertAdjacentHTML('afterbegin', menu)
  const jan = document.querySelector('.jan')
  const ken = document.querySelector('.ken')
  const fight = document.querySelector('.fight')
  const logotype = document.querySelector('.logotype')
  const foreground = document.querySelector('.foreground')
  const background = document.querySelector('.background')
  const start = document.querySelector('.start')
/*
  const swiftRight = target => animate(target, 500, 'easeIn', {'x': 400}, true)
  const swiftLeft = target => animate(target, 500, 'easeIn', {'x': -400}, true)
  const propel = target => animate(target, 500, 'easeOut', {'y': -200}, true)
  const bounce = target => animate(target, 300, 'bounce', {'y': -20})
  const burst = target => animate(target, 50, 'easeIn', {'r': 166.5})
  const flash = target => animate(target, 1000, 'blink', null, true, true)

  swiftRight(jan)
    .then(() => Promise.all([swiftLeft(ken), propel(fight)]))
    .then(() => Promise.all([bounce(logotype), burst(background), burst(foreground)]))
    .then(() => Promise.all([flash(start), resolve(start)]))

  const svg = document.querySelector('svg')
  const base = start.transform.baseVal
  const rotate = svg.createSVGTransform()
  rotate.setRotate(90,100,100)
  base.appendItem(rotate)
  const translate = svg.createSVGTransform()
  translate.setTranslate(0,100)
  base.appendItem(translate)
  base.consolidate().matrix
*/
animate(foreground, 2000, 400)

})

export default loadMenu
