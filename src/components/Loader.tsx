import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  isLoading: boolean
  children?: ReactNode
}

const Loader = ({ isLoading, children }: Props) => (
  <>
    {isLoading ? (
      <StyledLoader>
        <i className="fa fa-2x fa-rebel fa-spin" />
      </StyledLoader>
    ) : (
      children
    )}
  </>
)

const StyledLoader = styled.div`
  margin: 35px;
`

export default Loader
