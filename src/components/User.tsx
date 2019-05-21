import React from 'react'
import styled from 'styled-components'

const User: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledImg src="https://placehold.jp/150x150.png" alt="" />
      <StyleName>テスト</StyleName>
      
      <StyledDl>
        <StyledDt>メール</StyledDt>
        <dd>tsukasamurashige@gmail.com</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>電話</StyledDt>
        <dd>090-1111-1111</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>町</StyledDt>
        <dd>setagaya</dd>
      </StyledDl>
      
      <StyledDl>
        <StyledDt>州</StyledDt>
        <dd></dd>
      </StyledDl>
    </StyledWrapper>
  )
}

const StyledWrapper= styled.div`
  width: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
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
