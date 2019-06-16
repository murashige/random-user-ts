import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  src: string
}

type StyledImgProps = {
  loaded: boolean
}

const ImageWithLoading: React.FC<Props> = ({ src }) => {
  const [loadedStatus, setLoadedStatus] = useState(false)

  const onLoad = () => {
    setLoadedStatus(true)
  }

  return (
    <StyledWrapper>
      <StyledImg
        src={ src } 
        alt=""
        loaded={ loadedStatus }
        onLoad={ onLoad }
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  :before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`

const StyledImg = styled.img<StyledImgProps>`
  @keyframes showImage {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  animation: ${props => props.loaded ? 'showImage 0.5s ease forwards': 'none'};
`

export default ImageWithLoading
