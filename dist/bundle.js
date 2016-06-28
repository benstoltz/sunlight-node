// import stampit from 'stampit';
const stampit = require('stampit')
const rp = require('request-promise')
// import rp from 'request-promise';

const defaultStamp = stampit({
  init: function ({args = []}) {
    const [options = {}] = args
    const {key = 'default'} = options

    Object.assign(this, {
      getKey () {
        return key
      }
    })
  }
})

function getLegislators (url, key) {
  const legislatorOptions = {
    url: url + `legislators?per_page=all&apikey=${key}`,
    json: true
  }
  console.log(legislatorOptions)
  return rp(legislatorOptions)
}

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

module.exports = SF
