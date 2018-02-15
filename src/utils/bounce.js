import animate from 'lib/animate'

const bounce = element => animate({
  duration: 300,
  timing: timeFraction => Math.sin(timeFraction * 3 * Math.PI * 2) / Math.exp(timeFraction * 2),
  draw: progress => element.setAttribute('transform', 'translate(0,' + (-20 * progress).toFixed(2) + ')')
})

export default bounce
