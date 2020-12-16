import {Container, Tab, Tabs, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../header/header';
import ExcersiceImportList from '../secondTab/ex-import-list';
import SecondTab from '../secondTab/second-tab';
import colors from '../styles/colors';
import ExcersiceList from './ex-list';
import FirstTab from './first-tab';

const HomePage = ({navigation}) => {
  const [email, setEmail] = React.useState('Email');
  const [password, setPassword] = React.useState('Password');

  const [showList, setshowList] = React.useState(true);
  const [showImportList, setshowImportList] = React.useState(true);

  function shouldShowList(bool) {
    setshowList(bool);
  }

  function shouldShowImportList(bool) {
    setshowImportList(bool);
  }

  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <Tabs initialPage={0}>
          <Tab
            heading="Mine"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            {showList && (
              <ExcersiceList shouldShowList={shouldShowList}></ExcersiceList>
            )}
            {!showList && <FirstTab shouldShowList={shouldShowList}></FirstTab>}
          </Tab>
          <Tab
            heading="Others"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            {showImportList && (
              <ExcersiceImportList
                shouldShowImportList={
                  shouldShowImportList
                }></ExcersiceImportList>
            )}
            {!showImportList && (
              <SecondTab
                shouldShowImportList={shouldShowImportList}></SecondTab>
            )}
          </Tab>
          <Tab
            heading="Get Together"
            tabStyle={{backgroundColor: colors.Oyster}}
            activeTabStyle={{backgroundColor: colors.Oyster}}>
            <View style={[styles.container]}>
              <Text>ToDo Video</Text>
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
