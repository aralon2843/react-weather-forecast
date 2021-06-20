import { StyledErrorMessage, StyledSearch, StyledSearchWrapper } from './Styles'
import search from '../../assets/icons/search.svg'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchCity } from '../../redux/actions/search'

const Search = () => {
  const searchRef = useRef()
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setSearchValue('')
    dispatch(setSearchCity(searchValue.trim()))
  }
  const onChangeHandler = () => {
    setSearchValue(searchRef.current.value)
  }
  const error = useSelector(
    (state) => state.currentWeather.error
  )

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
      {!error ? (
        ''
      ) : (
        <StyledErrorMessage>
          Ошибка. Неправильное название города
        </StyledErrorMessage>
      )}
    </StyledSearchWrapper>
  )
}

export default Search
