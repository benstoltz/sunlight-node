import stampit from 'stampit'
// const stampit = require('stampit')
import congress from './apis/congress'

const SF = stampit()
  .init(function () {
    const key = 'bob'
    this.getKey = () => {
      return key
    }
  })
  .methods({
    congress () {
      return congress()
    }
  })

export default SF
