import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import { Card } from '../components/Card';
import { CardSection } from '../components/CardSection';
import { MonoText } from '../components/StyledText';
import { Button, ThemeProvider } from 'react-native-elements';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
       <ThemeProvider>
        <Button title="Hey!" />
       </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  )
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
