import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';


export default function App() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecording: true,
          playsInSilentMode: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}> Recording {index + 1} - {recordingLine.duration}</Text>
          <View style={styles.row2}>
            <TouchableOpacity style={styles.button2} onPress={() => recordingLine.sound.replayAsync()}> 
              <Text style={styles.text}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => Sharing.shareAsync(recordingLine.file)}> 
              <Text style={styles.text}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View style={styles.title}>
        <Text style={styles.titleText}> Voice Recorder </Text>
        <Text style={styles.titleText2}> by Aprilia Purwanto 119140003</Text>
      </View>

        <TouchableOpacity
        style ={styles.button}
          onPress={recording ? stopRecording : startRecording} >
          <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
        </TouchableOpacity>
   
      {getRecordingLines()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33576B',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
    color : 'white',
    fontWeight : 'bold',
  },
  button: {
    width: 120,
    height:120,
    margin: 16,
    backgroundColor: '#B3DCD6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
  },
  button2: {
    width: 50,
    height:40,
    backgroundColor: '#B3DCD6',
    justifyContent:'center',
    alignItems:'center',
    margin:2,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  button3: {
    width: 50,
    height: 40,
    backgroundColor: '#B3DCD6',
    justifyContent:'center',
    alignItems:'center',
    margin:2,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
  },
  row2: {
    flexDirection:'row',
  },
  text : {
    color: '#33576B',
    fontWeight: 'bold',
  },
  title: {
    alignItems: 'center',
    paddingTop: 30,
    height: 300,
  },
  titleText : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleText2 : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    fontStyle: 'italic',
    color: '#B3DCD6',
  },
});