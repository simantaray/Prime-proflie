import React from 'react'
import styled from 'styled-components';
import Shop from './Shop'
function Body() {
    return (
        <Container>
           <Shop /> 
          
        </Container>
    )
}

export default Body;

const Container=styled.div`
display: flex;
flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    
    margin: -8px;
    margin-top: 140px;
    
`;
