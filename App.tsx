import * as React from 'react';
import styled from 'styled-components/native';
import Card from './components/Card';
import { SafeAreaView, ScrollView } from 'react-native';

interface OwnProps {}

type Props = OwnProps;

const App: React.FC<Props> = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: '100%' }}>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')}/>
            <Title>Welcome back,</Title>
            <Name>Ethan</Name>
            <Subtitle>Continue Learning</Subtitle>
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require('./assets/background2.jpg')}
              caption="React Native"
              subtitle="5 of 12 sections"
              logo={require('./assets/logo-react.png')}
            />
            <Card
              title="Styled Component3"
              image={require('./assets/background3.jpg')}
              caption="React Native"
              subtitle="5 of 12 sections"
              logo={require('./assets/logo-react.png')}
            />
            <Card
              title="Styled Components 4"
              image={require('./assets/background4.jpg')}
              caption="React Native"
              subtitle="5 of 12 sections"
              logo={require('./assets/logo-react.png')}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>


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
