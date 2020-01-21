import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"


const PostItem = ({ slug, image, titleImage, date, timeToRead, title, description, search }) => (
  <S.PostItemLink to={slug} search={search} cover direction="right" bg="#fff" duration={0.6}>
    <S.PostItemWrapper>
      <S.GroupImage>
        <img width="100%" src={image} alt={titleImage} />
      </S.GroupImage>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead == 1 ? `${timeToRead} minute` : `${timeToRead || 3} minutes`} to read</S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
