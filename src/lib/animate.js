const animate = (target, duration, ease, tween, fadeIn = false) => new Promise(resolve => {
  let start
  const animation = time => {
    if (!start) start = time
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    const timing = {
      easeIn: x => Math.pow(x, 1/10),
      easeOut: x => Math.pow(x, 60).toFixed(2),
      bounce: x => (Math.sin(x * 3 * Math.PI * 2) / Math.exp(x * 2)).toFixed(2),
      blink: x => (Math.sin(x * Math.PI * 7 + Math.asin(-1)) + 1) / 2,
      fadeOut: x => 1 - Math.pow(x, 2)
    }

    const progress = timing[ease](timeFraction)

    const draw = progress => {
      if (tween) {
      const key = Object.keys(tween)[0]
      const value = tween[key]
      const velocity = value * progress
      const attribute = {
        x: ['transform', x => `translate(${x},0)`],
        y: ['transform', y => `translate(0,${y})`],
        r: ['r', r => `${r}`]
      }

      target.setAttribute(attribute[key][0], attribute[key][1](velocity))
      }

      if (fadeIn) target.setAttribute('fill', `hsla(0,0%,0%,${1 * progress})`)
    }

    draw(progress)
    if (timeFraction < 1) requestAnimationFrame(animation)
    else resolve()
  }

  requestAnimationFrame(animation)
})

export default animate
