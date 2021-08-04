import { atom, selector, selectorFamily } from 'recoil'
import { searchCharacters, getCharacterDetails } from './services/characters'
import { Character } from './types'

// Atoms
export const characterSearchTermState = atom({
  key: 'characterSearchTerm',
  default: '',
})

// Selectors
export const characterResultsState = selector<Character[]>({
  key: 'characterResults',
  get: async ({ get }) => {
    const searchTerm = get(characterSearchTermState)

    if (searchTerm) {
      const results = await searchCharacters(searchTerm)
      return results
    }

    return []
  },
})

export const characterDetailsState = selectorFamily({
  key: 'characterDetails',
  get: (id: string) => async (): Promise<Character | null> => {
    if (id) {
      const character = await getCharacterDetails(id)
      return character
    }

    return null
  },
})
