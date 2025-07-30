import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HelloScreen = () => {
  return (
    // This SafeAreaView will ensure the red box is not hidden by the notch.
    <ScrollView>
      <Text>A very long piece of text...</Text>
      <TextInput placeholder="Another field" />
      {/* ...more content that goes off-screen */}
    </ScrollView>
  );
}



export default HelloScreen;