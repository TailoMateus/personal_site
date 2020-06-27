import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import Footer from "../Footer"
import GlobalStyles from '../../styles/global'
import MenuBar from "../MenuBar"
import * as S from "./styled"
import { TransitionPortal } from "gatsby-plugin-transition-link"


const Layout = ({ children, home }) => {
  return (
    <>
      <GlobalStyles />

      {home ? (
         <>
           <S.LayoutProfile>
             <S.ImageWrapper>
               <S.Image src="/assets/img/profile.jpeg" alt="Profile" />
             </S.ImageWrapper>
             <Profile />
           </S.LayoutProfile>
      
           <S.AllPosts>All Articles</S.AllPosts>
         </>
      ) : (
        <S.LayoutProfileInside>
          <Profile />
        </S.LayoutProfileInside>
      )}  
      
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
