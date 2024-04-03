/**
 * Simple Login UI React Native
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class App extends Component {
  render(){
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Tên đăng nhập:</Text>
          <TextInput style={styles.input} placeholder='VD: Nguyễn Văn A'/>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mật Khẩu</Text>
          <TextInput style={styles.input} placeholder='VD: abc1234' secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 12
  },

  title: {
    fontSize: 28,
    fontWeight: '500',
    color: 'black',
    marginBottom: 20
  },

  inputWrapper: {
    width: '100%',
    marginBottom: 5
  },

  label: {
    color: 'black',
    fontSize: 15,
    marginBottom: 3
  },

  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#3498db',
    marginTop: 20
  },

  buttonLabel: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
    textTransform: 'uppercase'
  }
});

export default App;
