import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './Styles';
import NumericInput from './NumericInput';

export default class TemperatureUnit extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(text) {
    this.props.update(text);
  }

  render () {
    const focus = this.props.focus;
    const name = this.props.name.charAt(0).toLowerCase();
    const focused = focus === name;
    return (
      <View style={styles.unitContainer}>
        <Text style={(focused) ? styles.focus : styles.label}>{this.props.name}</Text>
        <NumericInput update={this.update} value={this.props.value}/>
      </View>
    );
  }
}
