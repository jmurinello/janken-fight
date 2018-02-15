import animate from 'lib/animate'

const swiftLeft = element => animate({
  duration: 500,
  timing: timeFraction => Math.pow(timeFraction, 1 / 10),
  draw: progress => {
    element.setAttribute('transform', 'translate(' + (193.7 - progress * 400) + ',-173.3)')
    element.setAttribute('fill', 'hsla(0,0%,0%,' + progress + ')')
  }
})

export default swiftLeft
