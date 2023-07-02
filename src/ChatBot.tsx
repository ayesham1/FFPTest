import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  useColorScheme,
  StyleSheet,
  NativeModules,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { RNKommunicateChat } = NativeModules;

const ChatBot = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const startConversation = () => {
    let conversationObject = {
      appId: 'eb775c44211eb7719203f5664b27b59f', // Replace with your actual appId from Kommunicate dashboard
    };
    RNKommunicateChat.buildConversation(conversationObject, (response: string, responseMessage: string) => {
      if (response === 'Success') {
        console.log('Conversation successfully started with id: ' + responseMessage);
      } else {
        console.log('Failed to start conversation:', responseMessage);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.content}>
          <Text style={styles.title}>Chatbot Demo</Text>
          <Text style={styles.subtitle}>Here you can talk with our customer support.</Text>
          <View style={styles.buttonContainer}>
            <Button title="Start conversation" onPress={startConversation} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '70%',
  },
});

export default ChatBot;
