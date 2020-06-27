import styled from 'styled-components'
import media from "styled-media-query"

export const Title = styled.h4`
  display: inline-block;
  margin-right: 20px;

  ${media.lessThan("small")`
    display: block;
  `}
`

export const Link = styled.a`
  color: rgba(179,179,179,.6);
  border-bottom: 1px solid rgba(179,179,179,.3);
  padding-bottom: 3px;
`

export const FooterWrapper = styled.footer`
  text-align: center;
  background-color: #191606;

  ${media.lessThan("large")`
    padding-right: 40px;
  `}
`

export const CenterFooter = styled.div`
  padding: 75px 40px;
`
