import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const congress = stampit({
  refs: {
    url: `https://congress.api.sunlightfoundation.com/`
  },
  methods: {
    getLegislator (value) {
      return value
    }
  }
})
.compose(defaultStamp)

export default congress
