import React from "react";
import styled from "styled-components";
function Shop() {
  return (
    <Container>
      <Titel>
        <img src="/icon.svg" alt="" />
        <h1>THE LEAN APP IS COMING GUIDE!</h1>
      </Titel>
      <Link>
        <h1>SIGN UP NOW FOR FREE GUIDES!</h1>
        <Button>
          <img src="/share.svg" alt="" />
        </Button>
      </Link>
    </Container>
  );
}

export default Shop;

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    align-items: center;
    justify-content: center;
    align-self: center;
    
    width: 32%;
    padding: 0 10px;
    color: rgba(77,77,77,100);
    @media only screen and (max-width: 1000px) {
    width:80%;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;
const Titel = styled.div`
  display: flex;
  img {
    width: 24px;
    height: auto;
    opacity: 0.7;
  }
  h1 {
    padding-left: 10px;
    font-size: 1.2rem;
  }
`;
const Link = styled.div`
  position: relative;
  margin:0px  -10px;
  padding: 5px 10px;
  background-color: rgba(4, 4, 4,0.1);
  border-radius:5px;
  h1 {
      padding-left:10px ;
    font-size: 1rem;
  }
`;

const Button = styled.div`
  position: absolute;
  right: 22px;
  top: 14px;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(64, 224, 208, 100);
  border-radius:50% ;
  img{
      position: absolute;
      top:3.5px;
      left:3px;
  }
`;
