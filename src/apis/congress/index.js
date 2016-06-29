import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'
import {getAllLegislators} from './legislators'

const congress = stampit({
  refs: {
    url: 'https://congress.api.sunlightfoundation.com/'
  },
  methods: {
    getAllLegislators () {
      return getAllLegislators(this.url, this.getKey())
    }
  }
})
.compose(defaultStamp)

export default congress
