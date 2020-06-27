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
          <S.Title>{site.siteMetadata.title}</S.Title>
        </S.FirstGroupWrapper>
        <div>
          <S.Description>
            I’m a software developer, minimalist who is passionate about helping people become more capable and productive with good habits.
          </S.Description>

          <S.Description>
            I created this website in order to share my experiments in becoming a more effective and explores what it means to live a good life.
          </S.Description>
        </div>
    </S.PageWrapper>
  )
}

export default Profile
