import rp from 'request-promise'

export function getLegislators (url, key) {
  const legislatorOptions = {
    url: url + `legislators?apikey=${key}`
  }
  console.log(legislatorOptions)
  return rp(legislatorOptions)
}
