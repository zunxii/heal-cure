import { Text, View, StyleSheet } from 'react-native';
export default function ChatBubble({ message, isUser }: { message: string; isUser: boolean }) {
  return (
    <View style={[
      styles.bubble, 
      isUser ? styles.userBubble : styles.botBubble
    ]}>
      <Text style={isUser ? styles.userText : styles.botText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 16,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#3B82F6', // blue-600
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#E5E7EB', // gray-200
    alignSelf: 'flex-start',
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: 'black',
  },
});