import test from 'ava'
import get from '../../src/helpers/request'
import rp from 'request-promise'

test('test basic request', t => {
  const options = {
    uri: 'https://congress.api.sunlightfoundation.com/'
  }
  // console.log(get(baseURL))
  get(options)
    .then((response) => {
      console.log('bob', response)
    }, (err) => {
      console.log(err)
    })
})

const options = {
  uri: 'https://congress.api.sunlightfoundation.com/',
  json: true
}
rp('https://congress.api.sunlightfoundation.com/').then((result) => {
  console.log(result)
})
.catch((err) => {
  console.log(err)
})
