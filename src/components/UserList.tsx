import React from 'react'
import styled from 'styled-components'

import User from './User'

type Props = {
  users: Array<object>
}

const UserList: React.FC<Props> = ({ users }) => {
  const renderUserList = (users: Array<object>) => {
    return users.map((user: any, index: number) => {
      return (
        <StyledUserLi key={ index }>
        <User user={ user } />
      </StyledUserLi>
      )
    })
  }

  return (
    <StyledUserList>
      { renderUserList(users) }
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
