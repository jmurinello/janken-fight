const cpuMove = () => {
  const modulo = (a, n) => Math.floor(a % n)
  const belowOneThousand = Math.random() * 1000
  const number = modulo(belowOneThousand, 3)
  const choice = ['rock', 'scissors', 'paper']
  return choice[number]
}

export default cpuMove
