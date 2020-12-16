import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../styles/colors';

type ExerciseImportProp = {
  shouldShowImportList: (b: Boolean) => void;
};

const ExcersiceImportList: React.FC<ExerciseImportProp> = ({
  shouldShowImportList,
}) => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.greeting}>
            These exercise sets were shared with you.{' '}
          </Text>
          <Text style={styles.greeting}>Click on them to check them out! </Text>

          <Card title="Teachers orders!">
            <TouchableOpacity
              onPress={() => shouldShowImportList(false)}
              style={styles.add}>
              <Text style={styles.font}>Should do theese in January!</Text>
            </TouchableOpacity>
          </Card>

          <Card title="Great looking legs >.< ">
            <TouchableOpacity
              onPress={() => shouldShowImportList(false)}
              style={styles.add}>
              <Text style={styles.font}>Only bottom half exercises. </Text>
            </TouchableOpacity>
          </Card>

          <Card title="BFF Tips FOR SUMMER">
            <TouchableOpacity
              onPress={() => shouldShowImportList(false)}
              style={styles.add}>
              <Text style={styles.font}>Letś rock it gurl! </Text>
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.Basmati,
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  greeting: {
    marginTop: 12,
    marginLeft: 14,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExcersiceImportList;
