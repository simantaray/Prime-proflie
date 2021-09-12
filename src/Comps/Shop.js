import React from "react";
import styled from "styled-components";
function Shop(props) {
  return (
    <Container>
      <Title>
        <img src="/icon.svg" alt="" />
        <h1>{props.title}</h1>
      </Title>
      <Link>
        <h1>{props.link}</h1>
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
  margin-top: 10px;

  width: 32%;
  padding: 0 10px;
  color: rgba(77, 77, 77, 100);
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;
const Title = styled.div`
  position: relative;
  display: flex;
  img {
    position: relative;
    top: 15px;
    width: 24px;
    height: 24px;
    opacity: 0.7;
  }
  h1 {
    padding-left: 10px;
    font-size: 1.2rem;
  }
`;
const Link = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0px -10px;
  padding: 5px 10px;
  background-color:#40E0D0;
  border-radius: 5px;
  h1 {
    padding-left: 10px;
    font-size: 1rem;
  }
`;

const Button = styled.div`
  position: absolute;
  right: 22px;
  top: 14px;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.51);
  border-radius: 50%;
  img {
    position: absolute;
    top: 3.5px;
    left: 3px;
  }
`;
