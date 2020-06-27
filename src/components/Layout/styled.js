import styled from 'styled-components'
import media from "styled-media-query"


export const LayoutMain = styled.main`
  width: 100%;
  margin: 20px auto 60px;
  max-width: 1120px;
  z-index: 0;
  position: relative;

  ${media.lessThan("large")`
    max-width: 100%;
    padding-right: 40px;
  `}
`

export const AllPosts = styled.h1`
  text-align: center;
  margin-top: 50px;
  display: inline-block;
  width: 100%;
`

export const ImageWrapper = styled.aside`
  max-width: 40%;
  display: inline-block;
  width: 100%;

  ${media.lessThan("medium")`
    max-width: 100%;
  `}
`

export const LayoutProfile = styled.div`
  width: 100%;
  background-color: #191606;
`

export const LayoutProfileInside = styled.div`
  width: 100%;
  text-align: center;
  background-color: #191606;
`
