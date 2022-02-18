import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {vh, vw} from '../../Util/dimensions';

export default function Chat(props) {
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);

  var ws = React.useRef(
    new WebSocket('wss://w567l.sse.codesandbox.io/'),
  ).current;

  console.log('ws', ws);
  React.useEffect(() => {
    const serverMessagesList = [];

    ws.onopen = () => {
      setServerState('Connected to the server');
      setDisableButton(false);
    };

    ws.onclose = e => {
      setServerState('Disconnected. Check internet or server.');
      setDisableButton(true);
    };

    ws.onerror = e => {
      setServerState(e.message);
    };

    ws.onmessage = e => {
      console.log(e);
      serverMessagesList.push(e.data);
      setServerMessages([...serverMessagesList]);
    };
  }, []);

  const submitMessage = () => {
    ws.send(messageText);
    setMessageText('');
    setInputFieldEmpty(true);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity>
          <Text>back</Text>
        </TouchableOpacity> */}
        <View
          style={{
            height: vh(30),
            backgroundColor: '#eeceff',
            padding: vw(5),
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{width: vw(20), height: vw(20)}}
            onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../../assets/Icons/leftAngle.png')}
              style={{width: vw(20), height: vw(20)}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: vw(20)}}>{serverState}</Text>
        </View>

        <View
          style={{
            backgroundColor: '#ffeece',
            padding: vw(5),
            flexGrow: 1,
          }}>
          <ScrollView>
            {serverMessages.map((item, ind) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    padding: vw(10),
                    backgroundColor: 'white',
                    borderRadius: vw(20),
                    marginVertical: vh(5),
                    alignSelf: 'flex-end',
                    maxWidth: vw(200),
                  }}>
                  <Text style={{}} key={ind}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              // flexGrow: 1,
              width: vw(300),
              fontSize: 18,
              paddingLeft: vw(5),
              borderRadius: vw(20),
            }}
            placeholder={'Add Message'}
            onChangeText={text => {
              setMessageText(text);
              setInputFieldEmpty(text.length > 0 ? false : true);
            }}
            value={messageText}
            multiline={true}
          />
          <Button
            onPress={submitMessage}
            title={'Submit'}
            disabled={disableButton || inputFieldEmpty}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    // paddingTop: 30,
    paddingBottom: 8,
  },
});
