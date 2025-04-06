import { View, Button, Text, StyleSheet } from 'react-native';
import UploadButton from '@/components/UploadButton';
export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Doctor Prescription</Text>
      <UploadButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
});