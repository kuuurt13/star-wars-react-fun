export const search = (query) => {
  return fetch(`https://swapi.co/api/people/?search=${query}`)
    .then(res => res.json());
}

export const getDetails = (id) => {
  return fetch(`https://swapi.co/api/people/${id}`)
    .then(res => res.json());
}
