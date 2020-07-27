import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import {PERSON} from '../image/index.js';
import {Image} from 'react-native';

const CustomHeader = ({navigation}) => {
  const [email, setEmail] = React.useState('Email');
  const [password, setPassword] = React.useState('Password');

  return (
    <View style={styles.wrapper}>
      <Image width={6} height={6} source={PERSON} />
      <Text style={styles.textStyle}> Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.Oyster,
  },
  textStyle: {
    color: colors.Basmati,
  },
});

export default CustomHeader;
