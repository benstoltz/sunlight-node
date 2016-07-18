import rp from 'request-promise'

function fetchBill (url, key) {
  const options = {
    url: `${url}/bills?apikey=${key}`,
    json: true
  }
  return rp(options)
}

function searchBillsByContent (query, url, key) {
  const options = {
    url: `${url}/bills/search?${query}&apikey=${key}`,
    json: true
  }
  return rp(options)
}

export const bills = {
  fetchBill,
  searchBillsByContent
}
