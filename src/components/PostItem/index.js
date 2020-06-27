import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"


const PostItem = ({ slug, date, title }) => (
  <S.PostItemLink to={slug} cover direction="right" bg="#fff" duration={0.6}>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PostItem
