import stampit from 'stampit'
import defaultStamp from './helpers/defaultStamp'
import congress from './apis/congress/index'
// import capitolWords from './apis/capitolWords'
// import openStates from './apis/openStates'
// import politicalParty from './apis/politicalParty'
// import campaignFinance from './apis/campaignFinance'

const SF = stampit()
  .methods({
    congress () {
      return congress(null, {key: this.getKey()})
    },
    // 
    // capitolWords () {
    //   return capitolWords(null, {key: this.getKey()})
    // },
    //
    // openStates () {
    //   return openStates(null, {key: this.getKey()})
    // },
    //
    // politicalParty () {
    //   return politicalParty(null, {key: this.getKey()})
    // },
    //
    // campaignFinance () {
    //   return campaignFinance(null, {key: this.getKey()})
    // }
  })
  .compose(defaultStamp)

export default SF
