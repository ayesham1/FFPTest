import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

type ChatMessage = {
  text: string;
  sender: 'user' | 'bot';
};

const ChatbotTemplate = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
 
  const handleSend = () => {
    if (inputText.trim() !== '') {
      setChatHistory([
        ...chatHistory,
        { text: inputText, sender: 'user' },
        { text: 'This is a random response from the chatbot.', sender: 'bot' },
      ]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/burger-menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/chatbot.png')} style={styles.main_icon} />
        </TouchableOpacity>
        <Text style={styles.top_text}>Jarvis</Text>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/refresh.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        {chatHistory.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              { alignSelf: message.sender === 'user' ? 'flex-start' : 'flex-end' },
            ]}
          >
            <Text
              style={[
                styles.messageText,
                { backgroundColor: message.sender === 'user' ? '#EFEFF5' : '#FFFFFF' },
              ]}
            >
              {message.text}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#93939329"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#9393934D',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#2C9676',
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  
  },
  messageContainer: {
    marginBottom: 8,
    maxWidth: '60%',
    borderRadius: 4,
    padding: 14,
   

  },
  messageText: {
    color: '#3E3E3E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#9393934D',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#38AD89',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 8,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  sendButton: {
    backgroundColor: '#2C9676',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sendButtonText: {
    color:
    '#FFFFFF',
},
top_text: {
    color: '#38AD89',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'capitalize',
    textAlign: 'center'
},
main_icon: {
    width: 29,
    height: 29,
}
});

export default ChatbotTemplate;
