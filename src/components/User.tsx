import React, { useMemo } from 'react'
import styled from 'styled-components'

import ImageWithLoading from './ImageWithLoading'

interface IUser {
  name: {
    title: string,
    first: string,
    last: string
  },
  picture: {
    large: string
  }
  email: string,
  phone: string,
  gender: string,
  location: {
    city: string,
    state: string
  }
}

type Props = {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => {
  const fullName = useMemo(() => `${user.name.title} ${user.name.first} ${user.name.last}`, [user.name])

  return (
    <StyledWrapper>
      <ImageWithLoading src={ user.picture.large } />
      <StyleName>{ fullName }</StyleName>

      <StyledDl>
        <StyledDt>性別</StyledDt>
        <dd>{ user.gender }</dd>
      </StyledDl>

      <StyledDl>
        <StyledDt>メール</StyledDt>
        <dd>{ user.email }</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>電話</StyledDt>
        <dd>{ user.phone }</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>町</StyledDt>
        <dd>{ user.location.city }</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>州</StyledDt>
        <dd>{ user.location.state }</dd>
      </StyledDl>
    </StyledWrapper>
  )
}

const StyledWrapper= styled.div`
  width: 100%;
`

const StyleName = styled.p`
  margin-bottom: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`

const StyledDl = styled.dl`
  display: flex;
  margin-bottom: 6px;
  word-break: break-all;
`

const StyledDt = styled.dt`
  width: 60px;
  min-width: 60px;
  font-weight: bold;
`

export default User
