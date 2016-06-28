import rp from 'request-promise'
/**
 * Handles requests and responses to and from sunlight apis
 */

const get = function (options) {
  // if no options
  // if (!options) {
  //   console.error('request called without options')
  //   throw new Error('request requires options passed in')
  // }
  //
  // // or if no url on options
  // if (!options.url) {
  //   throw new Error('')
  // }

  return rp(options)
}

export default get
