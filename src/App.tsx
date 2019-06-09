import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UserList from './components/UserList'
import { GENDERS } from './const/sortOptions'

interface IGender {
  value: string,
  name: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState([])
  const [queries, setQeries] = useState({
    results: 100,
    gender: ''
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
      { renderUserList(users) }
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 15px;
`

const StyledSortContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 15px;
`

export default App
