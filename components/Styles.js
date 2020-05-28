import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 20,
    color: '#444',
  },
  bigLabel: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center'
  },
  inputText: {
    borderBottomWidth: 1,
    borderColor: '#444',
    fontSize: 18,
    height: 40
  },
  focus: {
    fontSize: 20,
    color: 'red'
  },
  unitContainer: {
    marginVertical: 20
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {styles};
