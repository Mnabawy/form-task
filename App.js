import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import ContactForm from './components/ContactUs'






export default class App extends Component {

  render() {
    return (
      <ScrollView>
      <ContactForm />
      </ScrollView>
    );
  }
}


