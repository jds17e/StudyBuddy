 import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  SafeAreaView,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { SearchBar, Button, Card } from 'react-native-elements';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <SearchBar 
          placeholder="Type Here..."
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchBar}
        />
      </View>
      <View style={styles.cardList}>
        <Card title='HELLO WORLD' containerStyle={styles.cardStyle}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              buttonStyle={styles.cardButtonStyle}
              title='VIEW NOW' 
              onPress={() => showData()}/>
        </Card>
      </View>
    </SafeAreaView>
  );
}
async function showData(){
  var Username = await AsyncStorage.getItem('Username');
  var Firstname = await AsyncStorage.getItem('FirstName');
  console.log("My username is: " + Username);
  console.log("My FirstName is: " + Firstname);
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242"
  },
   searchView: {
    marginTop: '11%',
    height: "25%",
    backgroundColor: "#424242"
  },
  searchContainer: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: "#424242",
    marginTop: "15%",
    borderColor: "#424242"
  },
  searchBar: {
    backgroundColor: "#757575",
    marginLeft: "5%",
    marginRight: "5%",
  },
  cardList: {
    backgroundColor: "#424242",
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "#bababa",
    borderColor: "#424242"
  },
  cardButtonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0, 
    marginBottom: 0,
    backgroundColor: "#388e3c"
  }
});
