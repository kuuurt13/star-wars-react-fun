import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { characterDetailsState } from '../state'

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const character = useRecoilValue(characterDetailsState(id))

  if (!character) {
    return null
  }

  return (
    <StyledCharacterDetails>
      <h2>{character.name}</h2>
      <StyledClearButton onClick={() => history.goBack()}>X</StyledClearButton>
      <StyledDetailSection>
        <StyledDetail>Gender: {character.gender}</StyledDetail>
        <StyledDetail>Birth Year: {character.birthYear}</StyledDetail>
        <StyledDetail>Height: {character.height}</StyledDetail>
        <StyledDetail>Mass: {character.mass}</StyledDetail>
      </StyledDetailSection>
      <StyledDetailSection>
        <StyledDetail>Eye Color: {character.eyeColor}</StyledDetail>
        <StyledDetail>Hair Color: {character.hairColor}</StyledDetail>
        <StyledDetail>Skin Color: {character.skinColor}</StyledDetail>
      </StyledDetailSection>
    </StyledCharacterDetails>
  )
}

const StyledCharacterDetails = styled.div`
  position: relative;
  right: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  border: solid 3px;
  border-radius: 5px;

  h2 {
    margin: 0;
  }

  @media (max-width: 400px) {
    max-width: 100%;
  }
`

const StyledClearButton = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
  font-weight: 800;
`

const StyledDetailSection = styled.div`
  display: inline-block;
  width: 48%;
  padding: 10px 1%;
  vertical-align: top;
  text-transform: capitalize;

  @media (max-width: 400px) {
    width: 100%;
  }
`

const StyledDetail = styled.div`
  padding: 4px;
`

export default CharacterDetails
