import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Footer = () => {
   const data = useStaticQuery(
      graphql`
        query {
          bankCardBg: file(relativePath: { eq: "bank-card.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )
    const imageData = data.bankCardBg.childImageSharp.fluid
  return (
     <>
   <BackgroundImage
   Tag="section"
   fluid={imageData}
   backgroundColor={`#040e18`}
   id="contact"
>
<Wrapper>
<Container>
  <h2>Backed by giants</h2>
  <Paragraph>Our ambition is shared by our business partners and investors - to bring the special benefits of Private Banking to all our clients</Paragraph>
  <Button2><AnchorLink href='#contact'>Join Count Bismarck Today</AnchorLink></Button2>

</Container>
<FooterTop>
        <Container id="contact">
           <Logo>
              <StaticImage src="../assets/images/bismarck-logo-gold.png" alt="" />
           </Logo>
           <form
                    name="emailsubscribe"
                    method="POST"
                    data-netlify="true"
                  >
                     <input type="hidden" name="form-name" value="emailsubscribe" />
             <NewsLetter>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                      />
                  <Button type="submit">Subscribe to Newsletter</Button>   
               
             </NewsLetter>
            <Checkbox>
                    {/* <Input 
                    type="checkbox" 
                    required
                    />
                    <span>By subscribing, I agree to Count Bismarck's privacy policy</span>  */}

            <label className="check">
            <Input 
            type="checkbox" 
            required
            />
            <span className="checkmark"></span>
            </label>
            By subscribing, I agree to Count Bismarck's privacy policy
            </Checkbox>



           </form>
        </Container>
     </FooterTop>
</Wrapper>
</BackgroundImage>  
<FooterBottom>
        <Container>
           <BottomContent>
                 <SocialIcons>
                 <Link to="/">
                       <svg class="svg-icon" viewBox="0 0 20 20">
                          <path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
                       </svg>
                    </Link>
                    <Link to="/">
                       <svg className="svg-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7463 26.2462V16.0012H20.2025L20.7163 11.99H16.7463V9.43497C16.7463 8.27747 17.0688 7.48497 18.73 7.48497H20.835V3.90872C19.8108 3.79896 18.7813 3.74596 17.7513 3.74997C14.6963 3.74997 12.5988 5.61497 12.5988 9.03872V11.9825H9.16504V15.9937H12.6063V26.2462H16.7463Z" fill="#455A64"/>
                       </svg>
                     </Link>
                    <Link to="/">
                       <svg className="svg-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.22865 8.99637C7.73915 8.99637 8.96365 7.77187 8.96365 6.26137C8.96365 4.75087 7.73915 3.52637 6.22865 3.52637C4.71815 3.52637 3.49365 4.75087 3.49365 6.26137C3.49365 7.77187 4.71815 8.99637 6.22865 8.99637Z" fill="#455A64"/>
                          <path d="M11.5462 11.0688V26.2426H16.2574V18.7388C16.2574 16.7588 16.6299 14.8413 19.0849 14.8413C21.5061 14.8413 21.5362 17.1051 21.5362 18.8638V26.2438H26.2499V17.9226C26.2499 13.8351 25.3699 10.6938 20.5924 10.6938C18.2987 10.6938 16.7612 11.9526 16.1324 13.1438H16.0687V11.0688H11.5462V11.0688ZM3.86865 11.0688H8.5874V26.2426H3.86865V11.0688Z" fill="#455A64"/>
                       </svg>
                       </Link>
                 </SocialIcons>
                 <Links id="f_nav">
                    <li>
                       <Link to="/legal-terms">
                       Legal terms
                       </Link>
                    </li>
                    <li>
                       <Link to="/personal-data/">
                       Personal data 
                       </Link>
                    </li>
                    <li>
                       <Link to="/sitemamp/">
                       Sitemap
                       </Link>
                    </li>
                    <li>
                    <AnchorLink href='#contact'>
                       Contact
                       </AnchorLink>
                    </li>
                    <li>
                       <Link to="/credits/">
                       Credits
                       </Link>
                    </li>
                 </Links>
                 </BottomContent>
        </Container>
     </FooterBottom>
</>
  );
  };
  const Button2 = styled.button`
&:hover a{
    color: #222454;
 }
a {
    text-decoration: none;
    color: #707070;
  }
  a:hover{
    color: #222454;
  }
`;
  export default Footer; 

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:50px 0px;
    
  `;
const FooterTop = styled.div`
background-color: transparent;
padding: 55px 0 15px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Logo = styled.div`
  width: auto;
  margin-bottom: 30px;
`;
const Paragraph = styled.p`
color: #fff;
font-size: 26px;
line-height: 35px;
max-width:600px;
  @media only screen and (max-width:767px){
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-width:479px){
    font-size: 16px;
    line-height: 26px;
  }

`;
const NewsLetter = styled.div`
width:550px;
display: flex;
position: relative;
  @media (max-width:599px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Input = styled.input`
  background: transparent;
  border-radius: 32px;
  width: 55%;
  height: 35px;
  padding: 0 15px;
  border: 2px solid #B89260;
  outline: none;
  color: #B89260;
  font-size: 15px;
  border-right: none;
    &:focus {
      display: inline-block;
      border-radius: 2rem;
    }
    &::placeholder {
      color: #B89260;
    }
    @media (max-width:599px) {
      width: 90%;
      border-right: 2px solid #B89260;
    }
  `;
  const Checkbox = styled.div`
  display: flex;
justify-content: center;
align-items: center;margin-top:10px;
 

.check {
  position: relative;
  padding-left:10px;
   cursor: pointer;
 width:18px;
  height: 18px;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height:18px;
  width:18px;
  background-color: #B89260;
}
.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.check input:checked ~ .checkmark {
  background-color: #B89260;
}

.check input:checked ~ .checkmark:after {
  display: block;
}
.check .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left:6px;
  top: 2px;
  width:4px;
  height:8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

  `;
const Button = styled.button`
  background: #B89260;
  width: 45%;
  height: 39px;
  color: #222454;
  line-height: 26px;
  margin-bottom: 0;
  font-size: 15px;
  border-radius: 32px;
  cursor: pointer;
  position: absolute;
  right: 0;
    @media (max-width:599px) {
      width: 100%;
      position: inherit;
      margin-top: 10px;
    }
`;
const FooterBottom = styled.div`
background-color: #16183a;
padding: 15px 0;

`;
const BottomContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media only screen and (max-width:767px){
   flex-direction: column;
}


`;
const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
    @media (max-width: 991px) {
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: #B89260;
       }
    > li {
        margin:0;
        > a {
              display: grid;
              padding: 0 20px;
              height: 100%;
              font-size: 16px;
              position: relative;
              line-height: 20px;
              text-shadow: 0 0 0px #B89260;
         
          @media (max-width: 591px) {
              font-size: 15px;
              padding: 0 10px;
              margin-bottom: 10px;
          }
        }
    } 
`;
const SocialIcons = styled.div`
justify-content: start;
display: flex;
flex-direction: row;
  @media (max-width: 767px) {
      justify-content: center;
      margin-bottom: 10px;
  }
`;
