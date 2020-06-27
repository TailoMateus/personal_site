import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  margin: 20px 0;
  text-align: center;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    text-decoration: none;
    transition: color 0.5s;
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 20px;
    &:hover {
      color: #1fa1f2;
    }
  }
`
