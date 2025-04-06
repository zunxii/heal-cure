import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EHR Chatbot</Text>
      <Button title="Upload Prescription" onPress={() => router.push('/upload')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});