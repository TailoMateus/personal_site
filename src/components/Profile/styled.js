import styled from 'styled-components'
import media from "styled-media-query"

export const FirstGroupWrapper = styled.div`
  height: 40%;
  display: flex;
  align-items: flex-end;
`

export const SecondGroupWrapper = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`

export const ProfileWrapper = styled.ul`
  padding-left: 0;
  width: 100%;
`

export const Items = styled.li`
  margin: 10px 0;
  list-style: none;
  color: #fff;
  opacity: .9;
  font-size: 22px;

  ${media.lessThan("small")`
    font-size: 14px;
  `}

  ${media.lessThan("medium")`
    font-size: 20px;
  `}
`

export const Title = styled.h1`
  color: #fff;
  width: 100%;
  opacity: .9;
  font-size: 36px;
  margin-bottom: 10px;

  ${media.lessThan("medium")`
    font-size: 30px;
  `}
`
