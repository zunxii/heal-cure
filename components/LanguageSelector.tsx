import { View, Button, StyleSheet } from 'react-native';
import i18n from '../utils/language';
export default function LanguageSelector() {
  return (
    <View style={styles.container}>
      <Button title="EN" onPress={() => i18n.changeLanguage('en')} />
      <Button title="हिंदी" onPress={() => i18n.changeLanguage('hi')} />
      <Button title="FR" onPress={() => i18n.changeLanguage('fr')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
});