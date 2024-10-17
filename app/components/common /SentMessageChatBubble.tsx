import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface SentMessageChatBubbleProps {
  message: string;
  style?: ViewStyle;
}

const SentMessageChatBubble: React.FC<SentMessageChatBubbleProps> = ({ message, style }) => {
  return (
    <View style={[styles.bubble, style]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderBottomRightRadius: 4,
    backgroundColor: '#B4002D',
    flexShrink: 1,
  },
  messageText: {
    color: '#FFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
});

export default SentMessageChatBubble;

