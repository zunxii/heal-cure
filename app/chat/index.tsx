import { View, ScrollView, StyleSheet } from 'react-native';
import ChatBubble from '@/components/Chatbubble';
export default function ChatScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ChatBubble message="What symptoms are shown?" isUser={false} />
      <ChatBubble message="Fever and headache" isUser={true} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { padding: 16 },
});