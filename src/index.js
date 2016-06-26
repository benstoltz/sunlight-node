import stampit from 'stampit'
import defaultStamp from './helpers/defaultStamp'
import congress from './apis/congress'
import capitolWords from './apis/capitol_words'
import openStates from './apis/open_states'
import politicalParty from './apis/political_party'
import campaignFinance from './apis/campaign_finance'

const SF = stampit()
  .methods({
    congress () {
      return congress(null, {key: this.getKey()})
    },

    capitolWords () {
      return capitolWords(null, {key: this.getKey()})
    },

    openStates () {
      return openStates(null, {key: this.getKey()})
    },

    politicalParty () {
      return politicalParty(null, {key: this.getKey()})
    },

    campaignFinance () {
      return campaignFinance(null, {key: this.getKey()})
    }
  })
  .compose(defaultStamp)

export default SF
