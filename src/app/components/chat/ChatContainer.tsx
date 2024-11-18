import React from 'react';
import MessageForm from './MessageForm';
import { MessagesProvider } from '@/hooks/useMessages';

const ChatContainer = () => {
  return (
    <MessagesProvider>
      <MessageForm />
    </MessagesProvider>
  );
};

export default ChatContainer;
