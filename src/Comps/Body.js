import React from "react";
import styled from "styled-components";
import Shop from "./Shop";
import Youtube from "./Youtube";
function Body() {
  return (
    <Container>
      <Shop
        href="https://mailchi.mp/leanwithlilly/freeworkouttimetable"
        title="THE LEAN APP IS COMING GUIDE!"
        link="SIGN UP NOW FOR FREE GUIDES"
      />
      <Youtube />
      <Shop href ="https://www.leanwithlilly.com/products/the-anti-inflammatory-cook-book/" title="Get my Cookbook!" link="BUY NOW" />
      <Shop
      href="https://www.leanwithlilly.com/products/video-8-week-lean-transformation-guide"
        title="50% OFF my best selling 8 WEEK LEAN TRANSFORMATION GUIDE"
        link="BUY GORGEOUS GYM CLOTHING NOW"
      />
      <Shop href="https://www.leanwithlilly.com/collections/resistance-bands/" 
      title="LEAN RESISTANCE BANDS" link="SHOP NOW!" />
    </Container>
  );
}

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  transition: all 0.5s ease-in-out;

  margin: -8px;
  margin-top: 150px;

  margin-bottom: 100px;
`;
