const animate = ({duration, timing, draw}) => new Promise(resolve => {
  let start
  const animation = time => {
    if (!start) start = time
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1
    const progress = timing(timeFraction)
    draw(progress)
    if (timeFraction < 1) {requestAnimationFrame(animation)}
    else resolve()
  }
  requestAnimationFrame(animation)
})

export default animate
