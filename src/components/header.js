import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BgImg from '../assets/images/page-banner.png';

const Header = ({bg, page}) => {
  console.log('Bg color',bg)
  const [open, setOpen] = useState(false)
  return (
  <Wrapper bg={bg}>
     <Container>
        <LogoAndLinks>
           <Logo>
              <StaticImage src="../assets/images/logo.png" alt="" />
           </Logo>
           <Nav>
              <StyledBurger open={open} onClick={() =>
                 setOpen(!open)}>
                 <div />
                 <div />
                 <div />
              </StyledBurger>
              <Ul open={open}>
                 <li>
                    {page ==='home' ? <AnchorLink href='#about'>About Us</AnchorLink> : <Link to="/#about">About Us</Link>}
                 </li>
                 <li>
                 {page ==='home' ? <AnchorLink href='#dbanking'>Digital banking</AnchorLink> : <Link to="/#dbanking">Digital banking</Link>}
                 </li>
                 <li>
                    {page ==='home' ? <AnchorLink href='#cinvestments'>Curated Investments</AnchorLink> : <Link to="/#cinvestments">Curated Investments</Link>}
                 </li>
                 <li>
                    {page ==='home' ? <AnchorLink href='#membership'>Exclusive Membership</AnchorLink> : <Link to="/#membership">Exclusive Membership</Link>}
                 </li>
                 <li>
                    {page ==='home' ? <AnchorLink href='#contact'>Contact</AnchorLink> : <Link to="/#contact">Contact</Link>}
                 </li>
                 <li>
                    <AnchorLink href='#'>
                       <svg className="svg-icon" viewBox="0 0 20 20">
                          <path fill="none" d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"></path>
                       </svg>
                       My Account
                    </AnchorLink>
                 </li>
              </Ul>
           </Nav>
            <Myaccount>
              <AnchorLink>
                  <svg className="svg-icon" viewBox="0 0 20 20">
                      <path fill="none" d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"></path>
                  </svg>
                  My Account
              </AnchorLink>
           </Myaccount>
        </LogoAndLinks>
     </Container>
  </Wrapper>
  );
  };
  export default Header;  

const Wrapper = styled.div`
width: 100%;
position: absolute;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
z-index: 999 !important;
${props => props.bg && 
  `background-image: url(${BgImg});
  background-repeat:no-repeat;
  background-size:100% auto;`
}
`;
const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0px
`;
const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding:20px 25px 25px 15px;
    @media (max-width: 1200px) {
      align-items: center;
    }
`;
const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
`;
const Nav = styled.nav`
  // width: 100%;
   padding: 0 0px;
  display: flex;
  justify-content: end;
 `;
 const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top:30px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 991px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#B89260' : '#B89260'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  // z-index:999 !important;
  flex-flow: row nowrap;
  li {
    padding: 0px 0px;
    &:nth-of-type(5) a::after, &:nth-of-type(6) a::after{
        display: none;
     }
     &:nth-of-type(5) {
         margin-right: 20px;
     }
     &:nth-of-type(6) {
       display:none;
         padding: 0px;
         @media (max-width: 991px) {
            display:block;
         }
     } 
  }
  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    margin: 0;
    @media (max-width: 360px) {
      width: 250px;
    }
    li {
      color: #fff;
    }
  }
  a {
    text-decoration: none;
    color: #B89260;
    position: relative;
    padding: 0 20px;
    @media only screen and (min-width:992px) and (max-width:1024px){
        padding: 0 16px;
    }
    @media (min-width: 992px) {
        &::after{
          content: '';
          position: absolute;
          right: 0;
          top: 3px;
          background: #B89260;
          width: 2px;
          height: 12px;
        }
    }
    @media (max-width: 991px) {
        padding: 10px 0;
        float: left;
    }
  }
`;
const Myaccount = styled.div`
place-items: center;
display:flex;
color: #B89260;
a {
  text-decoration: none;
  color: #B89260;

}
@media (max-width: 991px) {
display:none;
}
`;
