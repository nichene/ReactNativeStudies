import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../styles/colors';
import {Card} from 'react-native-elements';
import {EX1, ADD_BLACK} from '../image';
import {EX3} from '../image';
import {EX7} from '../image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const exercises = [
  {
    name: 'Biceps bombado',
    img: EX1,
    repetitions: '2',
    minutesOfInterval: '3',
    notes: 'faz devagar!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
  {
    name: 'Abdomem tanquinho',
    img: EX3,
    repetitions: '2',
    minutesOfInterval: '3',
    notes: 'Vai!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
  {
    name: 'Cardio pra comer carbs depois',
    img: EX7,
    repetitions: '1',
    minutesOfInterval: '0',
    notes: 'Bike 30 minutos!',
    DaysOfWeek: 'SEG, QUA, SEX',
  },
];

const FirstTab = () => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Card>
            <View style={styles.add}>
              <Image height={20} width={20} source={ADD_BLACK} />
              <Text style={styles.addText}>Add new Exercise</Text>
            </View>
          </Card>

          {exercises.map((ex, i) => {
            return (
              <Card title={ex.name} key={i} style={{borderRadius: 13}}>
                <View style={styles.container}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={ex.img}
                  />
                  <View style={styles.details}>
                    <Text style={styles.name}>{ex.notes}</Text>
                    <Text>Reps: {ex.repetitions}</Text>
                    <Text>Interval minutes: {ex.minutesOfInterval}</Text>
                    <Text>Days of the week: {ex.DaysOfWeek}</Text>
                  </View>
                </View>
              </Card>
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
    color: colors.myYellow,
    fontWeight: 'bold',
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
});

export default FirstTab;