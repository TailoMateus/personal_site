import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = styled(Img)`
  border-radius: 100%;
`

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profiles.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Image fixed={avatarImage.childImageSharp.fixed} />
  )
}

export default Avatar