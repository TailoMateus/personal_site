import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from "./styled"


const Pagination = ({
  isFirst,
  isLast,
  prevPage,
  nextPage,
}) => (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          to={prevPage}
          cover
          direction="left"
          bg="#fff"
          duration={0.6}
        >
          ← Prev
        </AniLink>
      )}
      {!isLast && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg="#fff"
          duration={0.6}
        >
          Next →
      </AniLink>
      )}
    </S.PaginationWrapper>
  )

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination