import styled from 'styled-components'
import media from "styled-media-query"

export const ProfileWrapper = styled.ul`
  padding-left: 0;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const Items = styled.li`
  margin: 10px 0;
  list-style: none;
`