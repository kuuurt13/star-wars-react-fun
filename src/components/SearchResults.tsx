import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { characterResultsState } from '../state'

type Props = {
  onSelect: (id: string) => void
}

const SearchResult = ({ onSelect }: Props) => {
  const characterResults = useRecoilValue(characterResultsState)

  return (
    <StyledResults>
      <StyledResultList>
        {characterResults.map(character => (
          <li key={character.name} onClick={() => onSelect(character.id)}>
            {character.name}
          </li>
        ))}
      </StyledResultList>
    </StyledResults>
  )
}

const StyledResults = styled.section`
  display: flex;
  justify-content: center;
  height: 800px;
  perspective: 985px;
  font-size: 255%;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 150%;
  text-align: justify;

  @media (max-width: 650px) {
    font-size: 208%;
  }

  @media (max-width: 445px) {
    font-size: 165%;
  }
`

const StyledResultList = styled.ul`
  position: relative;
  top: -525px;
  max-width: 835px;
  text-align: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  transform-origin: 50% 100%;
  transform: rotateX(46deg) translateZ(-100px);

  li {
    padding: 0 0 8px 0;
    cursor: pointer;
  }
`

export default SearchResult
