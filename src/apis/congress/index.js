import stampit from 'stampit'

const congress = stampit({
  methods: {
    getLegislator (value) {
      return value
    }
  }
})
  .init(function () {
    const key = process.env.SF_SUNLIGHT_KEY || 'bob'
    this.getKey = () => {
      return key
    }
  }).init(function () {
    this.holyCarp = () => {
      return 'All the carps'
    }
  })

export default congress
