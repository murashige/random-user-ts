import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

import UserList from './components/UserList'
import { GENDERS } from './const/sortOptions'

interface IGender {
  value: string,
  name: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState([])
  const [queries, setQeries] = useState({
    results: 20,
    gender: '',
    page: 0
  })

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get('https://randomuser.me/api/', {
        params: queries
      })
      setUsers(result.data.results)
    }

    getUsers()
  }, [queries])

  console.log('users', users, 'queries', queries)

  const onChangeGender = (gender: string) => {
    setQeries({
      ...queries,
      gender
    })
  }

  const onPageChange = (selected: number) => {
    setQeries({
      ...queries,
      page: selected
    })
  }

  const renderGenderOptions = (genders: Array<IGender>) => {
    return genders.map((gender) => <option value={ gender.value } key={ gender.value }>{ gender.name }</option>)
  }

  const renderUserList = (users: Array<object>) => {
    const isLoaded = users.length > 0

    if(isLoaded) {
      return <UserList users={ users } />
    } else {
      return ''
    }
  }

  return (
    <StyledContainer>
      <StyledSortContent>
        <label>性別で絞り込み：</label>
        <select onChange={ (e) => onChangeGender(e.target.value) }>
          { renderGenderOptions(GENDERS) }
        </select>
      </StyledSortContent>

      <StyledUserListWrapper>
        { renderUserList(users) }
      </StyledUserListWrapper>
      
      <StyledPaginateWrapper>
        <ReactPaginate
          pageCount={ 20 }
          pageRangeDisplayed={ 5 }
          marginPagesDisplayed={ 1 }
          containerClassName="paginate-container"
          onPageChange={ (selected) => onPageChange(selected.selected) }
        />
      </StyledPaginateWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 30px 15px 50px;
`

const StyledSortContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 15px;
`

const StyledUserListWrapper = styled.div`
  margin-bottom: 20px;
`

const StyledPaginateWrapper = styled.div`
  display: flex;
  justify-content: center;
  .paginate-container {
    display: inline-flex;
    align-items: center;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 5px;
  }
  li {
    margin: 0 12px;
  }
  .selected a {
    color: deepskyblue;
    pointer-events: none;
  }
  .disabled a {
    color: #ccc;
    pointer-events: none;
  }
`

export default App
