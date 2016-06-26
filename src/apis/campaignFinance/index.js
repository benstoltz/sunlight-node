import stampit from 'stampit'
import defaultStamp from '../../helpers/defaultStamp'

const campaignFinance = stampit({
  refs: {
    url: `http://realtime.influenceexplorer.com/api/`
  }
}).compose(defaultStamp)

export default campaignFinance
