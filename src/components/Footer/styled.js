import styled from 'styled-components'
import media from "styled-media-query"

export const Title = styled.h4`
  display: inline-block;
  margin-right: 20px;

  ${media.lessThan("small")`
    display: block;
  `}
`

export const FooterWrapper = styled.footer`
  text-align: center;
  margin-bottom: 3%;

  ${media.lessThan("large")`
    padding-right: 40px;
  `}
`