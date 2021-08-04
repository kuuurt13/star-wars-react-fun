import { Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import Loader from '../components/Loader'
import SearchInput from '../components/SearchInput'
import SearchResults from '../components/SearchResults'
import { characterSearchTermState } from '../state'

const Search = () => {
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useRecoilState(characterSearchTermState)

  return (
    <StyledSearchWrapper>
      <SearchInput
        defaultValue={searchTerm}
        debounce={500}
        onChange={setSearchTerm}
      />
      <Suspense fallback={<Loader isLoading />}>
        <SearchResults onSelect={id => history.push(`/details/${id}`)} />
      </Suspense>
    </StyledSearchWrapper>
  )
}

const StyledSearchWrapper = styled.div`
  height: 290px;
  text-align: center;
`

export default Search
