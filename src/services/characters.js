const peopleURL = 'https://swapi.co/api/people'

export const search = async q => {
  const res = await fetch(`${peopleURL}/?search=${q}`)
  const { results = [] } = await res.json()

  return results.map(char => ({
    ...char,
    id: char.url.slice(-2)[0],
  }))
}

export const getDetails = async id => {
  const res = await fetch(`${peopleURL}/${id}`)
  return res.json()
}
