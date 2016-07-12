import rp from 'request-promise'

export function getAllLegislators (url, key) {
  const legislatorOptions = {
    url: url + `legislators?apikey=${key}`,
    json: true
  }
  console.log(legislatorOptions)
  return rp(legislatorOptions)
}
