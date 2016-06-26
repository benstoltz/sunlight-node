import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const politicalParty = stampit({
  refs: {
    url: `http://politicalpartytime.org/api/v1/`
  }
}).compose(defaultStamp)

export default politicalParty
