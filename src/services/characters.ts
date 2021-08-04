import { Character } from '../types'

const BASE_URL = 'https://swapi.dev/api/people'

export async function searchCharacters(term: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/?search=${term}`)
  const { results = [] } = await res.json()

  return results.map((person: any) => ({
    ...person,
    // Map id for ease of use later
    id: person.url.split('/').at(-2),
  }))
}

export async function getCharacterDetails(id: string): Promise<Character> {
  const res = await fetch(`${BASE_URL}/${id}`)
  const character = await res.json()

  return {
    ...character,
    birthYear: character.birth_year,
    eyeColor: character.eye_color,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
  }
}
