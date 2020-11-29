import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./styled"


const Profile = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.PageWrapper>
        <S.FirstGroupWrapper>
          <S.Title>Life is a series of experiments</S.Title>
        </S.FirstGroupWrapper>
    </S.PageWrapper>
  )
}

export default Profile
