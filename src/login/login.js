import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import colors from '../styles/colors';
import {LOGO} from '../image/index.js';
import {Image} from 'react-native';
import {TextInput} from 'react-native';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = React.useState('Email');
  const [password, setPassword] = React.useState('Password');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image width={24} height={24} source={LOGO} />
        <Text style={styles.wellcomeText}>SmartFit</Text>
        <TextInput style={styles.textInput} value={email} />
        <TextInput style={styles.textInput} value={password} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          color={colors.myYellow}
          title=" Sign up here "
          onPress={() => navigation.navigate('SignUpPage')}
        />
        <View style={styles.space} />
        <Button
          style={styles.buttonStyle}
          color={colors.myYellow}
          title="     Login     "
          onPress={() => navigation.navigate('HomePage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.Oyster,
  },
  container: {
    marginTop: 90,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wellcomeText: {
    color: colors.Jasmine,
    fontSize: 24,
    margin: 20,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    margin: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  buttonStyle: {
    height: 40,
    width: 130,
    top: 60,
  },
  textInput: {
    margin: 10,
    backgroundColor: colors.Jasmine,
    borderColor: 'gray',
    borderWidth: 2,
    width: 270,
    height: 40,
    borderRadius: 12,
  },
  space: {
    margin: 10,
  },
});

export default LoginPage;
