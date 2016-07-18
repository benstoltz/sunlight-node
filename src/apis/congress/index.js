import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'
import {legislators} from './legislators'

const congress = stampit({
  refs: {
    url: 'https://congress.api.sunlightfoundation.com'
  },
  methods: {
    getAllLegislators () {
      return legislators.getAllLegislators(this.url, this.getKey())
    }
  }
})
.compose(defaultStamp)

export default congress
