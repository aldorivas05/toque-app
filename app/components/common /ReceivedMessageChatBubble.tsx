import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface ReceivedMessageChatBubbleProps {
  message: string;
  style?: ViewStyle;
}

const ReceivedMessageChatBubble: React.FC<ReceivedMessageChatBubbleProps> = ({ message, style }) => {
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
    borderBottomLeftRadius: 4,
    backgroundColor: '#F6F6F6',
    flexShrink: 1,
  },
  messageText: {
    color: '#222',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
});

export default ReceivedMessageChatBubble;
