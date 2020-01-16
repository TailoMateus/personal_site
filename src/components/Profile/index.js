import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Avatar from '../Avatar'
import * as S from "./styled"


const Profile = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title_introduction
          description
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{site.siteMetadata.title_introduction}</h1>
      <S.ProfileWrapper>
        {site.siteMetadata.description.map(description =>
          <S.Items key={description}><strong>{description}</strong></S.Items>
        )}
      </S.ProfileWrapper>
    </div>
  )
}

export default Profile