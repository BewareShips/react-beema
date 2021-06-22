import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../assets/pictures/company_team.jpg'

const  TopContainer = styled.div`
 width:100%;
 height:100vh;
 padding:0;
 background: url(${BackgroundImg});
`

const BackgroundFilter = styled.div`
width:100%;
height:100%;
background: rgba(55, 55, 55, 0.88);
`

const TopSection = () => {
  return (
    <TopContainer>
      <BackgroundFilter>
      hello
      </BackgroundFilter> 
    </TopContainer>
  )
}

export default TopSection
