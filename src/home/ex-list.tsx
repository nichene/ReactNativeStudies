import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ADD_BLACK} from '../image';
import colors from '../styles/colors';

type FirstTabProp = {
  shouldShowList: (b: Boolean) => void;
};

const ExcersiceList: React.FC<FirstTabProp> = ({shouldShowList}) => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.greeting}>
            Select the set of exercises you want to see:{' '}
          </Text>

          <Card>
            <TouchableOpacity style={styles.add}>
              <Image height={8} width={8} source={ADD_BLACK} />
              <Text style={styles.addText}>Add New Exercise Set</Text>
            </TouchableOpacity>
          </Card>

          <Card title="My Exercise List #1">
            <TouchableOpacity
              onPress={() => shouldShowList(false)}
              style={styles.add}>
              <Text style={styles.font}>Click to check it out!</Text>
            </TouchableOpacity>
          </Card>

          <Card title="My Exercise List #2">
            <TouchableOpacity
              onPress={() => shouldShowList(false)}
              style={styles.add}>
              <Text style={styles.font}>Let's exercise!</Text>
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

export default ExcersiceList;
