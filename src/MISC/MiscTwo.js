import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MiscOne from './MiscOne';
import auth from '@react-native-firebase/auth';
// import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const MiscTwo = () => {
  const [name, setName] = useState('');
  const [userInfo, setUserInfo] = useState();

  // const re=(t)=>{
  //     console.log("callback",t)
  //     setName(t)
  // }
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

      const {idToken} = await GoogleSignin.signIn();
      console.log('idToken', idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error', error);
    }
  };

  const loginPress = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    console.log('facebook');
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
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={loginPress}
        style={{height: 50, width: 300, borderWidth: 1}}>
        <Text>userSign</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // icon={GoogleSigninButton.Size.Icon}
        onPress={_signIn}
        // disabled={this.state.isSigninInProgress}
      />

      <TouchableOpacity
        onPress={onFacebookButtonPress}
        style={{width: 200, height: 40, borderWidth: 1}}>
        <Text>fb</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MiscTwo;

const styles = StyleSheet.create({});
