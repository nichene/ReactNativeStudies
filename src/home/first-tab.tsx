import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExerciseModal} from '../exercise/exercise_modal';
import {Exercise} from '../exercise/model/exercise';
import {NewExerciseModal} from '../exercise/new_exercise_modal';
import {ADD_BLACK, EX1, EX3, EX7} from '../image';
import colors from '../styles/colors';

const exercises = [
  {
    name: 'Biceps bombado',
    img: EX1,
    number: '15',
    weight: '3kg',
    repetitions: '2',
    minutesOfInterval: '3',
    notes: 'Faz devagar!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
  {
    name: 'Abdomem tanquinho',
    img: EX3,
    number: '35',
    weight: '10kg',
    repetitions: '3',
    minutesOfInterval: '3',
    notes: 'Vai!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
  {
    name: 'Cardio pra comer carbs depois',
    img: EX7,
    number: 'X',
    weight: 'X',
    repetitions: '1',
    minutesOfInterval: '0',
    notes: 'Bike 30 minutos!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
];

const FirstTab = () => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalEx, setmodalEx] = useState();

  function showExerciseModal(ex) {
    setmodalEx(ex);
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  function saveModalEx(ex: Exercise) {
    console.log(ex);
    setShowModal(false);
  }

  function saveNewExModal(a: string) {
    console.log(a);
    setShowNewModal(false);
  }

  function closeNewModal() {
    setShowNewModal(false);
  }

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card>
            <TouchableOpacity
              onPress={() => setShowNewModal(true)}
              style={styles.add}>
              <Image height={14} width={14} source={ADD_BLACK} />
              <Text style={styles.addText}>New Exercise</Text>
            </TouchableOpacity>
          </Card>

          <Modal
            animationType={'slide'}
            transparent={true}
            visible={showModal}
            onRequestClose={() => closeModal()}>
            <View style={styles.modal}>
              <ExerciseModal
                exercise={modalEx}
                onSaveModal={saveModalEx}
                onCancelModal={closeModal}
              />
            </View>
          </Modal>

          <Modal
            animationType={'slide'}
            transparent={true}
            visible={showNewModal}
            onRequestClose={() => closeNewModal()}>
            <View style={styles.modal}>
              <NewExerciseModal
                onSaveNewModal={saveNewExModal}
                onCancelNewModal={closeNewModal}
              />
            </View>
          </Modal>

          {exercises.map((ex, i) => {
            return (
              <View key={`${ex.name}+${i}`}>
                <TouchableOpacity onPress={() => showExerciseModal(ex)}>
                  <Card title={ex.name}>
                    <View style={styles.container}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={ex.img}
                      />
                      <View style={styles.details}>
                        <Text style={styles.name}>{ex.notes}</Text>
                        <Text style={styles.font}>
                          Num of times: {ex.number}. Weight: {ex.weight}.
                        </Text>
                        <Text style={styles.font}>
                          Reps: {ex.repetitions}. Interval minutes:{' '}
                          {ex.minutesOfInterval}
                        </Text>
                        <Text style={styles.font}>
                          Days of the week: {ex.DaysOfWeek}
                        </Text>
                      </View>
                    </View>
                  </Card>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
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
    marginLeft: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  add: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addText: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  font: {
    fontStyle: 'italic',
    color: colors.Tuna,
  },
  modal: {
    // width: 250,
    // height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default FirstTab;
