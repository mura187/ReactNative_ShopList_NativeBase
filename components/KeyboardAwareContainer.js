import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../constants/Colors';

const KeyboardAwareContainer = props => (
  <View style={[styles.scrollViewWrapper, styles.border]}>
    <KeyboardAwareScrollView
      enableOnAndroid
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,
    margin: 15,
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
  },
});

export default KeyboardAwareContainer;
