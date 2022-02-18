import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {vh, vw} from '../Util/dimensions';
import { useDispatch } from 'react-redux';
import {userloginId} from '../Screens/Verify/action'

const GoogleFblogin = props => {
  const dispatch=useDispatch()
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1066446721194-677psv47o8m8rjfove4co28cs870lpnc.apps.googleusercontent.com',

      // webClientId:"484344836482-14sadgj6edofpvekkfjl74amfuae7jrr.apps.googleusercontent.com"
    });
  }, []);

  const _signIn = async () => {
    try {
      console.log('google', GoogleSignin);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // //  this.setState({ userInfo });
      console.log('userInfo', userInfo);
      console.log('userInfo', userInfo.user.id);
      dispatch(userloginId(userInfo.user.id)
      )

      const {idToken} = await GoogleSignin.signIn();
      console.log('idToken', idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);

      if (userInfo.user.email.length > 0) {
        props.navigation.navigate('BottomTabNavigator');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    // console.log('facebook');
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    // console.log("result",result)
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log("facebookdata",data)

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(300),
        marginTop: vh(50),
        // borderWidth:1
      }}>
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        // disabled={this.state.isSigninInProgress}
      /> */}

      <TouchableOpacity onPress={_signIn} style={{}}>
        <Image
          style={{width: vw(60), height: vw(60)}}
          source={require('../assets/Logo/google.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onFacebookButtonPress} style={{}}>
        <Image
          style={{width: vw(60), height: vw(60)}}
          source={require('../assets/Logo/facebook.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} style={{}}>
        <Image
          style={{width: vw(60), height: vw(60)}}
          source={require('../assets/Logo/signup.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoogleFblogin;

const styles = StyleSheet.create({});
