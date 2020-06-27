import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../components/Post/styled"
import RecommendedPosts from "../components/RecommendedPosts"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout home={false}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead == 1 ? `${post.timeToRead} minute` : `${post.timeToRead} minutes`} to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <S.Newsletter>
        <h1>Newsletter</h1>
        <S.TextNews>Newsletter sobre tecnologia, produtividade, hábitos, a vida e algo mais.</S.TextNews>
        <S.InscreverNews href="https://tinyletter.com/Tailo" target="_blank">Inscrever-se!</S.InscreverNews>
      </S.Newsletter>
        
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image
        date(formatString: "MMMM DD, YYYY", locale: "en-us")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
