import React from 'react'
import styled from 'styled-components'

import User from './User'

const UserList: React.FC = () => {
  return (
    <StyledUserList>
      <StyledUserLi>
        <User />
      </StyledUserLi>
    </StyledUserList>
  )
}

const StyledUserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const StyledUserLi = styled.li`
  width: 25%;
  margin-bottom: 25px;
  padding: 0 15px;
`

export default UserList
