import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const capitolWords = stampit({
  refs: {
    url: `http://capitolwords.org/api/1/`
  }
}).compose(defaultStamp)

export default capitolWords
