import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: #8899a6;
  display: inline-block;
  width: ${props => props.search ? "100%" : "31%"};
  padding: 20px;
  margin: 1%;
  box-sizing: border-box;
  border: 1px solid #eee;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }

  ${media.lessThan("medium")`
    width: ${props => props.search ? "100%" : "48%"};
  `}

  ${media.lessThan("small")`
    width: ${props => props.search ? "100%" : "97%"};
  `}
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
  font-size: 0.9rem;
  margin-top: 15px;
  display: inline-block;
`

export const PostItemTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 20px 0;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`