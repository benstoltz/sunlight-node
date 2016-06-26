import test from 'ava'
import SF from '../src/index'

test('lets log some sf', t => {
  const key = SF()
  console.log(key)
  console.log(key.congress().getLegislator('bob'))
  console.log(key.congress().getLegislator('hi there'))
  console.log(Object.getPrototypeOf(SF().congress()))
  t.is(key.getKey(), 'bob')
})
