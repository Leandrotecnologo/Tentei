import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
import HomeScreen from './HomeScreen';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log(`Submitting form with name: ${name}, email: ${email}, password: ${password}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Pronto" onPress={HomeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", paddingHorizontal: 20, }, title: { fontSize: 32, fontWeight: "bold", marginBottom: 50, }, input: { width: "100%", height: 50, borderWidth: 1, borderColor: "#aaa", borderRadius: 5, paddingHorizontal: 10, marginVertical: 10, }, button: { backgroundColor: "#007aff", width: "100%", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: 20, }, buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold", }, });



export default LoginScreen;
