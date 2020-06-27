import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
  padding: 2rem;

  ${media.lessThan("medium")`
    display: inline-block;
  `}
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: #191606;
  color: #fff;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  border-bottom: 1px solid #191606;
  border-top: 1px solid #191606;
  background: #191606;
  line-height: 22px;

  ${media.lessThan("medium")`
    padding: 10px;
    display: block;
    width: 100%;
  `}

  &:hover {
    background: #191606;
  }
  &.previous {
    border-right: 1px solid #191606;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
