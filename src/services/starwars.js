export const search = (query) => {
  return fetch(`https://swapi.co/api/people/?search=${query}`)
    .then(res => res.json());
}
