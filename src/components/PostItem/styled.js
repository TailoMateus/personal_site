import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: #8899a6;
  display: inline-block;
  width: 100%;
  padding: 20px;
  margin: 1%;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  vertical-align: top;
  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: inline-block;
  width: 100%;
`

export const PostItemInfo = styled.div`
  display: inline-block;
`

export const PostItemDate = styled.time`
  vertical-align: top;
  font-size: 1.1rem;
  display: inline-block;
  margin: 8px 30px 10px 0;
  min-width: 160px;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  display: inline-block;
  line-height: 30px;
  overflow: hidden;
`
