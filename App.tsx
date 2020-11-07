import * as React from 'react';
import styled from 'styled-components/native';

interface Props {
}

const App: React.FC<Props> = () => {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require('./assets/avatar.jpg')}/>
        <Title>Welcome back,</Title>
        <Name>Ethan</Name>
        <Subtitle>Continue Learning</Subtitle>
      </TitleBar>
      {/*<Card*/}
      {/*  title="Styled Components"*/}
      {/*  image={require('./assets/background2.jpg')}*/}
      {/*  caption="React Native"*/}
      {/*  subtitle="5 of 12 sections"*/}
      {/*  logo={require('./assets/logo-react.png')}*/}
      {/*/>*/}
    </Container>
  );
};
export default App;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
  
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8beee;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8beee;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;

  margin-left: 20px;
  margin-top: 50px;
`;
