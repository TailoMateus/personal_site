import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  margin: 20px 0;
  color: #8899a6;
  text-align: center;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;
    font-size: 18px;
    margin-right: 20px;
    &:hover {
      color: #1fa1f2;
    }
  }
`