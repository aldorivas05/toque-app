import React from "react";
import { View, StyleSheet, FlatList, Text, ListRenderItem, ViewStyle } from "react-native";
import SendMessageIcon from "@/assets/icons/SentMessageIcon";
import InputChatMessage from "../components/common /InputChatMessage";
import SentMessageChatBubble from "../components/common /SentMessageChatBubble";
import ReceivedMessageChatBubble from "../components/common /ReceivedMessageChatBubble";


type Message = {
  id: string;
  type: 'sent' | 'received';
  text: string;
  date?: string;
  style?: ViewStyle;
};

const messages: Message[] = [
  { id: '1', type: 'sent', text: 'Este es un mensaje de prueba enviado', date: '2024-09-29' },
  { id: '2', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },
  { id: '3', type: 'received', text: 'Este es un mensaje de prueba recibido', date: new Date().toISOString().split('T')[0] },
  { id: '4', type: 'sent', text: 'Este es un cortin', date: '2024-09-29' },
  { id: '5', type: 'received', text: 'Este es un mensaje de prueba recibido extremadamente largo para ver como se comporta esta vaina bajo un poco de estres de tipeo', date: '2024-09-29' },
  { id: '6', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },
  { id: '7', type: 'sent', text: 'Este es un corto corto', date: '2024-09-29' },
  { id: '8', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },
  { id: '9', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },
  { id: '10', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },
  { id: '11', type: 'received', text: 'Este es un mensaje de prueba recibido', date: '2024-09-29' },

];


const ChatDetailsScreen: React.FC = () => {

  const renderItem: ListRenderItem<Message> = ({ item }) => {

    const isToday = item.date === new Date().toISOString().split('T')[0];
    
    return (
      <View>
        {isToday && (
          <Text style={styles.todayText}>Hoy</Text>
        )}
        {item.type === 'sent' ? (
          <SentMessageChatBubble message={item.text} style={styles.sentMessage} />
        ) : (
          <ReceivedMessageChatBubble message={item.text} style={styles.receivedMessage} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.initialConversationText}>
        Iniciaste una conversación con Alejandra{"\n"}29 Sep, 2024
      </Text>

  
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContentContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.writingContainer}>
        <View style={styles.inputContainer}>
          <InputChatMessage />
        </View>
        <View style={styles.sentIconContainer}>
          <SendMessageIcon />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
  chatContentContainer: {
    paddingVertical: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    maxWidth: '50%',
    flexShrink: 1,
    marginBottom: 20,
    paddingVertical: 10,
    alignItems: 'flex-end',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    maxWidth: '50%',
    flexShrink: 1,
    marginBottom: 20,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  initialConversationText: {
    color: '#777',
    textAlign: 'center',
    // leadingTrim: 'both',
    // textEdge: 'cap',
    marginVertical: 20,
    fontFamily: 'Inter_400Regular',
    fontSize: 12
  },
  todayText: {
    color: '#777',
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  writingContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
    paddingTop: 8
  },
  inputContainer: {
    flex: 1,
  },
  sentIconContainer: {
    paddingLeft: 12,
  },
});

export default ChatDetailsScreen;
