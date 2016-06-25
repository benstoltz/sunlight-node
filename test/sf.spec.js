import test from 'ava'
import SF from '../src/index'

test('lets log some sf', t => {
  const key = SF().getKey()

  t.is(key, 'bob')
})
