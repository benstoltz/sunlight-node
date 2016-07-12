import test from 'ava'
import congress from '../../../src/apis/congress'

// test('placeholder', t => {
//   t.pass()
// })

test('real test', t => {
  return congress(null, {key: '9f64292279cc4c40aea72946979597a2'})
    .getAllLegislators()
    .then(result => {
      t.is(typeof result, 'object')
    })
})
