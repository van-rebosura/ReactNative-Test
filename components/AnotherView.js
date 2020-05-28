import React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from './Styles';

export default function AnotherView({navigation}) {
  return (
    <View style={styles.center}>
      <Text>This is another view</Text>
      <Button
        title="Navigate to Converter"
        onPress={()=>navigation.navigate('Temperature Converter')} />
    </View>
  );
}
