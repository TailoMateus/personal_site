import React from "react"
import * as S from "./styled"


const Footer = () => {
  return (
    <S.FooterWrapper>
      <h2>You can find me at</h2>
      {links().map(({ path, label }) =>
        <S.Title><a target="_blank" rel="noopener noreferrer" href={path}>{label}</a></S.Title>
      )}
    </S.FooterWrapper>
  )
}

const links = () => {
  return [{
    label: "GitHub",
    path: "https://github.com/TailoMateus"
  },
  {
    label: "Linkedin",
    path: "https://www.linkedin.com/in/tailo-mateus-gonsalves-b0b07a92/"
  },
  {
    label: "E-mail",
    path: "mailto://tailogonsalves@gmail.com"
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/tailogonsalves"
  },
  {
    label: "Goodreads",
    path: "https://www.goodreads.com/user/show/66783285-tailo-gonsalves"
  }]
}

export default Footer
