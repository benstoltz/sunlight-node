import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const congress = stampit({
  methods: {
    getLegislator (value) {
      return value
    }
  }
})
.compose(defaultStamp)

export default congress
