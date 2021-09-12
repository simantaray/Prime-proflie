import React from "react";
import styled from "styled-components";

function Youtube() {
  return (
    <Container>
      <Title>
        <img src="/youtube.svg" alt="" />
        <h1>Over 500 FREE Home Workouts</h1>
      </Title>
      <Card>
        <img src="/dp.jpg" alt="" />
        <div className="details">
          <h1>Lilly Sabri</h1>
          <h2>
            I’m Lilly Sabri, founder of Lean with Lilly. I’ve been a
            Chartered...
          </h2>
          <a href="https://www.youtube.com/channel/UCTsM1dSAiXqiV5oZjuNw_Bg">
            <button>Subscribe</button>
          </a>
        </div>
      </Card>
    </Container>
  );
}

export default Youtube;
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  justify-content: center;
  align-self: center;

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
const Card = styled.div`
  margin: -8px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  color: white;
  background: rgb(68, 68, 68);
  background: linear-gradient(
    180deg,
    rgba(68, 68, 68, 0.9) 0%,
    rgba(1, 1, 1, 1) 100%
  );

  img {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 30%;
    border-radius: 50%;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 30px;
    h1 {
      font-size: 1.1rem;
      margin-top: -10px;
      margin-bottom: -7px;
    }
    h2 {
      font-size: 0.9rem;
    }
    button {
      cursor: pointer;
      padding: 10px;
      background-color: rgb(255, 0, 0);
      border-radius: 6px;
      border: none;
      width: 30%;
      color: white;
      font-size: 15px;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 500px) {
    img {
      position: relative;
      display: flex;
      justify-content: center;
      top: 10px;
      width: 40%;
      height: 40%;
      border-radius: 50%;
    }
    @media only screen and (max-width: 1200px) {
      img {
        width: 40%;
        height: 40%;
        border-radius: 50%;
      }
      .details {
        button {
          cursor: pointer;
          padding: 10px;
          background-color: rgb(255, 0, 0);
          border-radius: 6px;
          border: none;
          width: 40%;

          font-size: 13px;
        }
        h1 {
          font-size: 1.2rem;
          margin-top: -10px;
          margin-bottom: -7px;
        }
        h2 {
          font-size: 0.9rem;
        }
      }
    }
    @media only screen and (max-width: 1500px) {
      img {
        position: relative;
        display: flex;
        justify-content: center;
        top: 10px;
        width: 40%;
        height: 40%;
        border-radius: 50%;
      }
      .details {
        button {
          cursor: pointer;
          padding: 10px;
          background-color: rgb(255, 0, 0);
          border-radius: 6px;
          border: none;
          width: 40%;

          font-size: 13px;
        }
      }
    }
  }
`;
