import { StyledSearch, StyledSearchWrapper } from './Styles'
import search from '../../assets/icons/search.svg'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchCity } from '../../redux/actions/search'

const Search = () => {
  const searchRef = useRef()
  const [searchValue, setSearchValue] = useState(null)
  const dispatch = useDispatch()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setSearchValue('')
    dispatch(setSearchCity(searchValue))
  }
  const onChangeHandler = () => {
    setSearchValue(searchRef.current.value)
  }
  return (
    <StyledSearchWrapper>
      <form
        onSubmit={(event) => {
          onSubmitHandler(event)
        }}>
        <StyledSearch
          ref={searchRef}
          icon={search}
          type={'text'}
          onChange={onChangeHandler}
          value={searchValue}
        />
      </form>
    </StyledSearchWrapper>
  )
}

export default Search
