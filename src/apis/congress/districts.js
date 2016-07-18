import rp from 'request-promise'

function fetchDistrictByLatLon (url, key) {
  const options = {
    url: `${url}/districts/locate?`,
    json: true
  }
  return rp(options)
}

function fetchDistrictsByZip (zip, url, key) {
  const options = {
    url: `${url}/districts/locate?zip=${zip}&apikey=${key}`,
    json: true
  }
  return rp(options)
}

export const districts = {
  fetchDistrictByLatLon,
  fetchDistrictsByZip
}
