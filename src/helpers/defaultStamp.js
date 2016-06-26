import stampit from 'stampit'

const defaultStamp = stampit({
  init: function ({args = []}) {
    const [options = {}] = args
    const {key = 'default'} = options

    Object.assign(this, {
      getKey () {
        return key
      }
    })
  }
})

export default defaultStamp
