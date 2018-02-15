import animate from 'lib/animate'

const swiftUp = element => animate({
  duration: 500,
  timing: timeFraction => Math.pow(timeFraction, 60),
  draw: progress => {
    element.setAttribute('transform', 'translate(-206.3,' + (26.7 - progress * 200) + ')')
    element.setAttribute('fill', 'hsla(0,0%,0%,' + progress + ')')
  }
})

export default swiftUp
