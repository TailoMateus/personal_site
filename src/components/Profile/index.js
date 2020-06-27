import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./styled"


const Profile = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <S.PageWrapper>
        <S.FirstGroupWrapper>
          <S.Title>{site.siteMetadata.title}</S.Title>
        </S.FirstGroupWrapper>
        <S.SecondGroupWrapper>
          <S.ProfileWrapper>
            {site.siteMetadata.description.map(description =>
              <S.Items key={description}>{description}</S.Items>
            )}
          </S.ProfileWrapper>
        </S.SecondGroupWrapper>
    </S.PageWrapper>
  )
}

export default Profile
