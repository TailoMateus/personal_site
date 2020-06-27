import styled from 'styled-components'
import media from 'styled-media-query'

export const PageWrapper = styled.div`
  max-width: 60%;
  display: inline-block;
  padding: 30px 60px;
  vertical-align: top;
  box-sizing: border-box;

  ${media.lessThan("medium")`
    max-width: 100%;
    padding: 20px;
  `}
`

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
  font-size: 20px;
  color: #fff;
  opacity: 0.9;

  ${media.lessThan("small")`
    font-size: 14px;
  `}

  ${media.lessThan("medium")`
    font-size: 20px;
  `}
`

export const Title = styled.h1`
  width: 100%;
  font-size: 36px;
  margin-bottom: 10px;
  color: #fff;
  opacity: 0.9;

  ${media.lessThan("medium")`
    font-size: 30px;
  `}
`
