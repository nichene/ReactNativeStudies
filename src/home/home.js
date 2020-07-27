import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Tab, Tabs, Text} from 'native-base';
import colors from '../styles/colors';
import CustomHeader from '../header/header';
import FirstTab from './first-tab';

const HomePage = ({navigation}) => {
  const [email, setEmail] = React.useState('Email');
  const [password, setPassword] = React.useState('Password');

  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <Tabs initialPage={0}>
          <Tab
            heading="Mine"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            <FirstTab></FirstTab>
          </Tab>
          <Tab
            heading="Others"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            <View style={[styles.container]}>
              <Text>Aba 2</Text>
            </View>
          </Tab>
          <Tab
            heading="Get Together"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            <View style={[styles.container]}>
              <Text>Aba 3</Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.Oyster,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Basmati,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default HomePage;
