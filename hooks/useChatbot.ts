import { useState } from 'react';
export function useChatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const sendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    // Mock bot response
    setMessages(prev => [...prev, { text: 'Analyzing symptoms...', isUser: false }]);
  };
  return { messages, sendMessage };
}