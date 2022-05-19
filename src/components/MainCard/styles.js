import styled from 'styled-components/native';

export const CardContainer = styled.View`
background-color: ${(props)=> props.backgroundColor} ;
justify-content: center ;
align-items: center ;
border-radius: 20px ;
margin: 10px ;
width: 170px ;
height: 160px ;
`;

export const CardText = styled.Text`

color: #fff;
font-size: 20px ;
`;

export const CardTitle = styled.Text`
    color: #fff;
    margin: 15px ;
    font-size: 20px ;

`;