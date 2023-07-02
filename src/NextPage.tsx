import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Kommunicate } from 'react-native-kommunicate-chat';
 import KommunicateConfig from '../KommunicateConfig';
const { width, height } = Dimensions.get('window');

const NextPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleButtonPress = () =>{
    navigation.navigate('Screen3');
  }
  const handleSkip = () => {
    Kommunicate.init(KommunicateConfig.appId);
  };
  
  const [showSignUp, setShowSignUp] = useState(false);
  
  const handleGetStarted = () => {
    setShowSignUp(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleSkip}>
        <View style={styles.button}>
          <Text style={{ fontSize: 18 }}>Skip</Text>
        </View>
      </TouchableOpacity>
      <Image source={require('../assets/chat.png')} style={styles.img} />
      <View style={styles.message2}>
        <Text style={styles.tex_msg}>Got any creative ideas for a 10-year-old's birthday?</Text>
      </View>
      <View style={styles.message3}>
        <Text style={styles.tex_msg}>Here are a few ideas:</Text>
        <Text style={styles.tex_msg}>1. Have a themed party, such as a sports party.</Text>
        <Text style={styles.tex_msg}>2. Go to a trampoline park or laser tag venue.</Text>
        <Text style={styles.tex_msg}>3. Have a backyard campout with tents.</Text>
      </View>
      <View style={styles.b}>
        {showSignUp ? (
          // Sign Up options
          <View style={styles.message}>
            <View style={styles.greet}>
              <Text>Welcome to Jarvis GPT-3</Text>
            </View>
            <TouchableOpacity onPress={handleButtonPress} style={[styles.below_btn, { backgroundColor: '#38876A' }]}>
              <View style={styles.three_buttons}>
                <Text style={styles.btn_text}>Sign up with email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.below_btn, { backgroundColor: '#8B4513' }]}>
              <View style={styles.three_buttons}>
                <Text style={styles.btn_text}>Sign up with apple</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.below_btn, { backgroundColor: '#CD853F' }]}>
              <View style={styles.three_buttons}>
                <Text style={styles.btn_text}>Sign up with google</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.below_text}>
            <Text style={styles.last_text}>
              Already have an account? <Text style={styles.login_text}>Log in</Text>
            </Text>
            </View>
          </View>
        ) : (
          // Original content
          <View style={styles.message}>
            <Text style={styles.msg_text}>
              <Text style={styles.highlighted_text}>Live</Text> dialogue.
            </Text>
            <View style={styles.msg_text_style}>
              <Text style={styles.msg}>
                Get the perfect results every time with Jarvis dialogue-based editing and live feedback feature.
              </Text>
            </View>
            <TouchableOpacity style={styles.below_btn} onPress={handleGetStarted}>
              <View style={styles.next_btn}>
                <Text style={styles.btn_text}>Get Started</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.last_text}>
              Already have an account? <Text style={styles.login_text}>Log in</Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#ffffff',
    borderRadius: 80,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 11,
    paddingRight: 11,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  btn: {
    paddingLeft: 250,
  },
  img: {
    width: 250,
    height: 400,
    marginBottom: 250,
  },
  b: {
    backgroundColor: '#62BAA8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  message: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    width: '90%',
    height: '155%',
    position: 'absolute',
    top: -110,
    left: '5%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg_text_style: {
    marginLeft: 15,
    marginRight: 15,
  },
  msg_text: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 28,
  },
  highlighted_text: {
    fontWeight: 'bold',
    color: '#62BAA8',
    fontSize: 28,
  },
  msg: {
    marginTop: 18,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  next_btn: {
    backgroundColor: '#38876A',
    paddingHorizontal: 100,
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  below_btn: {
    marginTop: 18,
    marginBottom: 16,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_text: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'nowrap'
  },
 below_text:{
    marginBottom: 17
 },
  last_text: {
    fontWeight: 'bold',
    color: '#979999',
  },
  login_text: {
    color: '#62BAA8',
    fontWeight: 'bold',
  },
  message2: {
    marginTop: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    width: '90%',
    height: '10%',
    position: 'absolute',
    top: -80,
    left: '5%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message3: {
    marginTop: 310,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    width: '90%',
    height: '22%',
    position: 'absolute',
    top: -80,
    left: '5%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tex_msg: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  three_buttons :{
    paddingHorizontal: 100,
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  greet : {
    color: '#38876A',
    fontSize: 28,
    alignContent:'center'
  }
  });
  
  export default NextPage;
  
