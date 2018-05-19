const animate = (target, duration, timing, value, opacity, loop) => new Promise(resolve => {
  let start
  const attribute = target.getAttribute('transform')
  if (!attribute) target.setAttribute('transform', 'matrix(1,0,0,1,0,0)')

  const matrix = target.transform.baseVal.consolidate().matrix
  const previousMatrix = [matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f]

  const animation = time => {
    if (!start) start = time
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    const easing = {
      linear: x => x,
      easeIn: x => Math.pow(x, 1/10),
      easeOut: x => Math.pow(x, 60).toFixed(2),
      bounce: x => (Math.sin(x * 3 * Math.PI * 2) / Math.exp(x * 2)).toFixed(2),
      blink: x => (Math.sin(x * Math.PI * 7 + Math.asin(-1)) + 1) / 2,
    }

    const progress = easing[timing](timeFraction)

    const draw = progress => {
      let currentMatrix = [1,0,0,1,0,0]

      // Matrices Multiplier
      const multiply = ([a1,b1,c1,d1,e1,f1], [a2,b2,c2,d2,e2,f2]) => {
        const a = a1 * a2 + c1 * b2
        const b = b1 * a2 + d1 * b2
        const c = a1 * c2 + c1 * d2
        const d = b1 * c2 + d1 * d2
        const e = a1 * e2 + c1 * f2 + e1
        const f = b1 * e2 + d1 * f2 + f1

        currentMatrix = [a,b,c,d,e,f]
      }

      // Opacity
      if (opacity) target.setAttribute('opacity', `${1 * progress}`)

      if (value === null) return

      // Radius
      if (value['r']) target.setAttribute('r', `${value['r'] * progress}`)

      // Translate
      if (value['x']) {
        const tx = value['x'] * progress
        multiply(currentMatrix, [1,0,0,1,tx,0])
      }

      if (value['y']) {
        const ty = value['y'] * progress
        multiply(currentMatrix, [1,0,0,1,0,ty])
      }

      // Rotate
      if(value['rotate']) {
        const angle = (value['rotate'] * Math.PI / 180) * progress
        let cx = value['cx'] ? value['cx'] : previousMatrix[4]
        let cy = value['cy'] ? value['cy'] : previousMatrix[5]
        const cosAngle = Math.cos(angle)
        const sinAngle = Math.sin(angle)
        if (value['cx'] == 0) cx = 0
        if (value['cy'] == 0) cy = 0

        const rotateMatrix = [1,0,0,1,0,0]

        rotateMatrix[0] = rotateMatrix[3] = cosAngle
        rotateMatrix[1] = sinAngle
        rotateMatrix[2] = -sinAngle
        rotateMatrix[4] = -cosAngle * cx + sinAngle * cy + cx
        rotateMatrix[5] = -sinAngle * cx - cosAngle * cy + cy

        multiply(currentMatrix, rotateMatrix)
      }

      multiply(currentMatrix, previousMatrix)

      // Scale
      if (value['scale']) {
        const scale = value['scale'] * progress
        console.log([scale,0,0,scale,0,0])
        multiply(currentMatrix, [scale,0,0,scale,0,0])
      }

      matrix.a = currentMatrix[0]
      matrix.b = currentMatrix[1]
      matrix.c = currentMatrix[2]
      matrix.d = currentMatrix[3]
      matrix.e = currentMatrix[4]
      matrix.f = currentMatrix[5]
    }

    draw(progress)
    if (timeFraction < 1) {
      requestAnimationFrame(animation)
    } else if (loop) {
      start = time
      requestAnimationFrame(animation)
    } else {
      resolve()
    }
  }

  requestAnimationFrame(animation)
})

export default animate
