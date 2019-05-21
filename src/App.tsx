import React from 'react'
import styled from 'styled-components'

import UserList from './components/UserList'

const App: React.FC = () => {
  return (
    <StyledContainer>
      <UserList />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 15px;
`

export default App
