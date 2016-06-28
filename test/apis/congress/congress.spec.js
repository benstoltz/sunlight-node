import test from 'ava'
import congress from '../../../src/apis/congress'

test('placeholder', t => {
  t.pass()
})

test('request', t => {
  congress(null, {key: '9f64292279cc4c40aea72946979597a2'})
    .getLegislators()
    .then(result => {
      t.is(result, 'unicorn')
    })
})
