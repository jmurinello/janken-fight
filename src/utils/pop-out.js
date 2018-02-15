import animate from 'lib/animate'

const popOut = element => animate({
  duration: 100,
  timing: timeFraction => Math.pow(timeFraction, 1 / 10),
  draw: progress => element.setAttribute('r', progress * 166.5)
})

export default popOut
