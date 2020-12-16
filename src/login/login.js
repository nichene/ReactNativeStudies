import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {LOGO} from '../image/index.js';
import colors from '../styles/colors';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = React.useState(' Email');
  const [password, setPassword] = React.useState(' Password');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image width={24} height={24} source={LOGO} />
        <Text style={styles.wellcomeText}>SupaFit</Text>
        <TextInput style={styles.textInput} placeholder={email} />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.space} />
        <Button
          style={styles.buttonStyle}
          color={colors.myYellow}
          title="       Hustle!       "
          onPress={() => navigation.navigate('HomePage')}
        />
      </View>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('SignUpPage')}>
        Not SupaFit yet? sign up here!
      </Text>
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
    right: 7,
    margin: 20,
    flexDirection: 'row',
    flex: 1,
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
  signUpText: {
    color: colors.myYellow,
    bottom: 30,
  },
});

export default LoginPage;
