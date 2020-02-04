import React from "react"
import { Home } from "styled-icons/boxicons-solid/Home"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import * as S from "./styled"


const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink
        to="/"
        cover
        direction="right"
        bg="#fff"
        duration={0.6}
        title="Back to Home"
      >
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem 
        title="Back to top"
        onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
        }}
      >
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
