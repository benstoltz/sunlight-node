import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'
import {getLegislators} from './legislators'

const congress = stampit({
  refs: {
    url: 'https://congress.api.sunlightfoundation.com/'
  },
  methods: {
    getLegislators () {
      return getLegislators(this.url, this.getKey())
    }
  }
})
.compose(defaultStamp)

export default congress
