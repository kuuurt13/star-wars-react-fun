import { ChangeEvent } from 'react'
import styled from 'styled-components'

type Props = {
  defaultValue: string
  debounce: number
  onChange: (value: string) => void
}

function SearchInput({ defaultValue = '', debounce, onChange }: Props) {
  let debounceTimeout: ReturnType<typeof setTimeout>

  function debounceInput({ target }: ChangeEvent<HTMLInputElement>) {
    clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(() => {
      onChange(target.value)
    }, debounce)
  }

  return (
    <StyledInput
      type="text"
      autoFocus
      defaultValue={defaultValue}
      onChange={debounceInput}
      placeholder="Search Characters"
    />
  )
}

const StyledInput = styled.input`
  min-width: 283px;
  padding: 8px;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  text-align: center;

  &:placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }

  &:focus {
    -webkit-focus-ring-color: none;
    outline: none;
  }
`

export default SearchInput
