import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const openStates = stampit({
  refs: {
    url: `http://openstates.org/api/v1/`
  }
}).compose(defaultStamp)

export default openStates
