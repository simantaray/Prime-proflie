import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "./Header.css";
function Header() {
  const [dp, setDp] = useState(false);

  const changeDp = () => {
    if (window.scrollY >= 10) {
      setDp(true);
    } else {
      setDp(false);
    }
  };

  window.addEventListener("scroll", changeDp);

  return (
    <Container className={dp ? "container active" :"container"}>
      <Img className={dp ? "dp active" : "dp"} src="/dp1.jpg"></Img>
      <Name className={dp ? "name active" : "name"}>
        Lilly Sabri<span>PRO</span>
      </Name>
      <h1 className={dp ? "link active" : "link"}>bio.fm/lillysabri</h1>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  width: 100vw;
  box-shadow: 0px 3px 5px 0px rgba(49, 49, 53, 0.4);
  padding: 24px 0;
  background-color: rgba(64, 224, 208, 100);

  margin: -8px;
  text-align: center;
  .link {
    font-size: 1.1rem;
    color: white;
    margin-top: 4px;
    margin-bottom: 0;
  }
`;
const Img = styled.img`
  width: 48px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid white;
`;
const Name = styled.h1`
  position: relative;
  font-size: 1.375rem;
  color: rgba(77, 77, 77, 100);
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;

  line-height: 1.2;
  span {
    position: relative;
    top: -1px;
    color: white;
    font-size: 0.8rem;
    font-family: inherit;
    margin-left: 8px;
    border-radius: 6px;
    padding-top: 2px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 3px;
    background-color: #00c464;
  }
`;
