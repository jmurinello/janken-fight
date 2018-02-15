import animate from 'lib/animate'

const swiftRight = element => animate({
  duration: 500,
  timing: timeFraction => Math.pow(timeFraction, 1 / 10),
  draw: progress => {
    element.setAttribute('transform', 'translate(' + (-606.3 + progress * 400) + ',-173.3)')
    element.setAttribute('fill', 'hsla(0,0%,0%,' + progress + ')')
  }
})

export default swiftRight
