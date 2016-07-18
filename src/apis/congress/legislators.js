import rp from 'request-promise'

function getAllLegislators (url, key) {
  const legislatorOptions = {
    url: `${url}/legislators?per_page=all&apikey=${key}`,
    json: true
  }
  return rp(legislatorOptions)
}

function fetchLegislator (url, key) {
  const options = {
    url: `${url}/legislators?per_page=all&apikey=${key}`,
    json: true
  }
  return rp(options)
}

function fetchLegislatorByLocation (url, key) {
  const options = {
    url: `${url}/legislators?per_page=all&apikey=${key}`,
    json: true
  }
  return rp(options)
}

export const legislators = {
  getAllLegislators,
  fetchLegislator,
  fetchLegislatorByLocation
}
