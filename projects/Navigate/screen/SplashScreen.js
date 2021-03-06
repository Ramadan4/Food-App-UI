import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        /> */}
        <LottieView source={require('../assets/logo_2.json')} autoPlay loop />
      </View>
      <Animatable.View
        animation="fadeInUp"
        style={[styles.footer, {backgroundColor: colors.background}]}>
        <Text style={[styles.title, {color: colors.text}]}>
          If You Hungry Just eat  :-)
        </Text>
        <Text style={styles.text}>SignIn with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#009387',
    //  backgroundColor: '#db482e',
    backgroundColor: '#2c4558',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 35,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
