const assert = require('assert')
const cpuMove = require('./cpu').default

describe('cpu move', () => {
  it('should return a string', () => {
    assert.equal(typeof cpuMove(), 'string')
  })
})
