import test from 'ava'
import SF from '../src/index'

test('Returns default when no key is passed in', t => {
  const key = SF()
  t.is(key.getKey(), 'default')
})

test('Returns input from key', t => {
  const key = SF(null, {key: 'this is a key'})
  t.is(key.getKey(), 'this is a key')
})

test('congress properly inherits key', t => {
  const key = SF(null, {key: '1234567'})
  t.is(key.congress().getKey(), '1234567')
})

test('capitolWords properly inherits key', t => {
  const key = SF(null, {key: '1234567'})
  t.is(key.capitolWords().getKey(), '1234567')
})

test('openStates properly inherits key', t => {
  const key = SF(null, {key: '1234567'})
  t.is(key.openStates().getKey(), '1234567')
})

test('politicalParty properly inherits key', t => {
  const key = SF(null, {key: '1234567'})
  t.is(key.politicalParty().getKey(), '1234567')
})

test('campaignFinance properly inherits key', t => {
  const key = SF(null, {key: '1234567'})
  t.is(key.campaignFinance().getKey(), '1234567')
})

test('multiple isntances of sf', t => {
  const sf1 = SF(null, {key: '1234'})
  const sf2 = SF(null, {key: '5678'})
  t.is(sf1.getKey(), '1234')
  t.is(sf2.getKey(), '5678')
})
