import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function EHRScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EHR Report #{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: '600' },
});