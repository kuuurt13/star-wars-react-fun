import styled from 'styled-components'
import starWarsLogo from '../assets/images/star-wars-logo.png'

const Logo = () => (
  <StyledMainImage src={starWarsLogo} alt="Star Wars: React App" />
)

const StyledMainImage = styled.img`
  max-width: 320px;
  margin-bottom: 40px;
`

export default Logo
