import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => (props.theme === true ? '#232634' : '#03A9F4')};
  align-items: center;
`;

export const Temperature = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const TemperatureText = styled.Text`
  font-size: 50px;
  color: #fff;
`;

export const LocationText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Card = styled.View`
  color: ${props => (props.theme === true ? '#fff' : '#000')};
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonRefresh = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
  align-self: flex-start;
`;

export const ThemeButton = styled.View`
  position: absolute;
  padding: 10px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
export const SquareButton = styled.View`
  background-color: #fff;
  justify-content: center;
  margin-right: 20px;
  border-radius: 20px;
  width: 50px;
  height: 25px;
`;

export const CircleButton = styled.TouchableOpacity`
  background-color: ${props => (props.theme === true ? '#232634' : '#03A9F4')};
  align-self: ${props => (props.theme === true ? 'flex-end' : 'flex-start')};
  height: 20px;
  width: 20px;
  margin: 5px;
  border-radius: 50px;
`;

export const Info = styled.View`
  align-items: center;
  background-color: ${props => (props.theme === true ? '#393e54' : '#f9f9f9')};
  border-radius: 20px;
  width: 350px;
  height: 230px;
`;

export const InfoText = styled.Text`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#000')};
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const InfoCard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
