import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  background: #f0f0f3;
  border-left: 1px solid #dedede;
  top: 0;

  ${media.lessThan("large")`
    width: 40px;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #555;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`