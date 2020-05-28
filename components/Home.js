import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import TemperatureUnit from './TemperatureUnit';
import { styles } from './Styles';

export default function HomeScreen(props) {
  const [scale, setScale] = useState();
  const [temp, setTemp] = useState();

  let updateCelsius = (text) => {
    setTemp(text);
    setScale('c');
  }

  let updateFahrenheit = (text) => {
    setTemp(text);
    setScale('f');
  }


  return (
    <>
    <View style={{padding: 20}}>
      <Text>The back button on the top left here is automatically added by React Navigation. Hardware back action is also handled.</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.bigLabel}>Real time Celcius to Fahrenheit converter</Text>
      <TemperatureUnit
        name="Celcius"
        update={updateCelsius}
        value={(scale === 'c') ? temp + '' :  converter(temp, toCelcius) + ''}
        scale="c"
        focus={scale}/>
      <TemperatureUnit
        name="Fahrenheit"
        update={updateFahrenheit}
        value={(scale === 'f') ? temp + '' : converter(temp, toFahrenheit) + ''}
        scale="f"
        focus={scale}/>
        <Button
          title="Alert test"
          onPress={() => alert('Components work very differently than how Widgets in Android work. A dynamic converter like this, for example, would need their "state" (object properties) lifted to the most common component to be able to act on changes on the textboxes.')} />
    </View>
    </>
  );
}


function converter(value, convertFunc) {
  if (value === '') {
    return '';
  }
  let num = convertFunc(value);
  if (isNaN(num)) {
    return '';
  }
  return num;
}

function toCelcius(value) {
  return (value - 32) * 5 / 9;
}

function toFahrenheit(value) {
  return (value * 9 / 5) + 32;
}
