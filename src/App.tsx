import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UserList from './components/UserList'

const App: React.FC = () => {
  const [users, setUsers] = useState([])

  console.log('users', users)

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=100")
      setUsers(result.data.results)
    }
    
    getUsers()
  }, [])

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
      { renderUserList(users) }
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 15px;
`

export default App
