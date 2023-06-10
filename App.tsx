import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NextPage from './src/NextPage';
const Stack = createStackNavigator();

const HomePage = () =>{
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.button}>
          <Text style={{ fontSize: 18 }}>Skip</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.b}>
        <Message />
      </View>

      <Image
        source={require('./assets/chatbot.png')}
        style={styles.img}
        resizeMode="contain"
      />

      <StatusBar style="auto" />
    </View>
  )
}
const Message = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleButtonPress = () =>{
    navigation.navigate('Screen2');
  }

  return (
    <View style={styles.message}>
      <Text style={styles.msg_text}>Meet <Text style={styles.highlighted_text}>Jarvis.</Text></Text>
      <View style={styles.msg_text_style}>
        <Text style={styles.msg}>The AI powered GPT-3 search and content creation app that gives you accurate, 
          ad-free results instantly.
        </Text>
      </View>
      
      <TouchableOpacity style={styles.below_btn} onPress={handleButtonPress} >
        <View style={styles.next_btn}  >
          <Text style={styles.btn_text } >Next</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.below_text}>Already have an account? <Text style={styles.login_text}>Log in</Text></Text>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Screen1" component={HomePage} />
      <Stack.Screen name="Screen2" component={NextPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginTop: 50,
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 300,
  },
  button: {
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
    height: '120%',
    position: 'absolute',
    top: -80,
    left: '5%', 
    right: '5%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg_text_style :{
    marginLeft: 15,
    marginRight: 15,
  },
  msg_text : {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 28,
  },
  highlighted_text : {
    fontWeight: 'bold',
    color: '#62BAA8',
    fontSize: 28,
  },
  msg : {
    marginTop: 10,
  color: '#000000',
  fontSize: 16,
  fontWeight: 'bold',
  },
  next_btn: {
    backgroundColor: '#38876A',
    paddingHorizontal: 100, 
    paddingVertical: 8, 
    borderRadius: 18,
    alignItems: 'center'
  },
  below_btn:{
    marginTop: 20,
    marginBottom: 20,
  },
  btn_text: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold'  
  },
  below_text:{
    fontWeight: 'bold',
    color: '#979999'
  },
  login_text : {
    color: '#62BAA8',
    fontWeight: 'bold',
    }
});
