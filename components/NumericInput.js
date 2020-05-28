import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './Styles';

export default class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.sanitize = this.sanitize.bind(this);
  }

  sanitize(text) {
    let pattern = /^\-?\d*\.?\d*/g;
    let newText = pattern.exec(text);
    if (newText !== null) {
      newText = newText[0];
    }
    this.props.update(newText);
  }

  render() {
    const value = this.props.value;
    return (
      <>
        <TextInput
          style={styles.inputText}
          keyboardType='number-pad'
          onChangeText={(text) => this.sanitize(text)}
          value= {(this.props.value) ? this.props.value : ''}
          placeholder= {(this.props.default) ? this.props.default : ''}
          onFocus={() => this.sanitize(value)}/>
      </>
    );
  }
}
