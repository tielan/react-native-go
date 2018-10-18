
import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View
} from 'react-native';

const LoadingView = () => (
  <View style={styles.loading}>
    <ActivityIndicator
      size="large"
      color="#e9423c"
    />
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default LoadingView;