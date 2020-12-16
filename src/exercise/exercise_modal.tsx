import {Exercise} from './model/exercise';
import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

type exerciseProps = {
  exercise: Exercise;
};

export const ExerciseModal = (exerciseProps) => {
  console.log({exerciseProps});
  return (
    <View style={styles.wrapper}>
      <Text>HI! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.Basmati,
    flexDirection: 'column',
  },
});
