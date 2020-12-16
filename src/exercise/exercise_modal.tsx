import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../styles/colors';
import {Exercise} from './model/exercise';

type exerciseProps = {
  exercise: Exercise;
  onSaveModal: (ex: Exercise) => void;
  onCancelModal: () => void;
};

export const ExerciseModal: React.FC<exerciseProps> = ({
  exercise,
  onSaveModal,
  onCancelModal,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.edtText}>
        {' '}
        Would you like to edit this exercise?{' '}
      </Text>
      <Card title={exercise.name}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            style={styles.scroll}
            resetScrollToCoords={{x: 0, y: 0}}
            scrollEnabled={true}>
            <View style={styles.details}>
              <Text>Image:{'\n'} </Text>
              <Image style={styles.image} source={exercise.img} />

              <Text>{'\n'}Exercise name:</Text>
              <TextInput style={styles.font}>{exercise.name}</TextInput>

              <Text>Exercise notes:</Text>
              <TextInput style={styles.font}>{exercise.notes}</TextInput>

              <Text>Num of times: </Text>
              <TextInput style={styles.font}>{exercise.number}</TextInput>

              <Text>Weight: </Text>
              <TextInput style={styles.font}>{exercise.weight}</TextInput>

              <Text>Reps: </Text>
              <TextInput style={styles.font}>{exercise.repetitions}</TextInput>

              <Text>Days of the week: </Text>
              <TextInput style={styles.font}>{exercise.DaysOfWeek}</TextInput>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Card>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => onCancelModal()}>
          <Text style={styles.savetext}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSaveModal(exercise)}>
          <Text style={styles.savetext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    backgroundColor: colors.myLightBlue,
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  edtText: {
    marginTop: 10,
    padding: 10,
  },
  scroll: {
    maxHeight: 300,
  },
  options: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.myBlue,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  add: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addText: {
    fontWeight: 'bold',
  },
  savetext: {
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
  },
  font: {
    fontStyle: 'italic',
    color: colors.Tuna,
  },
});
