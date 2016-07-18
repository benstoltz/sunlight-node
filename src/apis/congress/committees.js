import rp from 'request-promise'

function fetchCommitteesByMemberId (id, url, key) {
  const options = {
    url: `${url}/committees?member_id=${id}&apikey=${key}`,
    json: true
  }
  return rp(options)
}

function fetchMembersByCommittee (id, url, key) {
  const options = {
    url: `${url}/committees?committee_id=${id}&fields=members&apikey=${key}`,
    json: true
  }
  return rp(options)
}

function fetchJointCommittees (id, url, key) {
  const options = {
    url: `${url}/committees?chamber=joint&subcommittee=false&apikey=${key}`,
    json: true
  }
  return rp(options)
}

function fetchSubcommittees (id, url, key) {
  const options = {
    url: `${url}/committees?parent_committee_id=${id}&apikey=${key}`,
    json: true
  }
  return rp(options)
}

export const committees = {
  fetchCommitteesByMemberId,
  fetchMembersByCommittee,
  fetchJointCommittees,
  fetchSubcommittees
}
