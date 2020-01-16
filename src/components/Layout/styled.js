import styled from 'styled-components'
import media from "styled-media-query"


export const LayoutMain = styled.main`
  width: 100%;
  margin: 60px auto;
  max-width: 1120px;
  z-index: 0;
  position: relative;

  ${media.lessThan("large")`
    max-width: 100%;
    padding-right: 40px;
  `}
`

export const LayoutProfile = styled.aside`
  text-align: center;
  margin-top: 3%;

  ${media.lessThan("large")`
    padding-right: 40px;
  `}
`