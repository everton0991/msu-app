import React from 'react';
import MessageForm from './MessageForm';
// import { OpenAiMessagesProvider } from '@/hooks/openai/useMessages';
import { GeminiMessagesProvider } from '@/hooks/gemini/useMessages';
import MessagesList from './MessagesList';

const ChatContainer = () => {
  return (
    // <OpenAiMessagesProvider>
    <GeminiMessagesProvider>
      <MessagesList />
      <MessageForm />
    </GeminiMessagesProvider>
    // </OpenAiMessagesProvider>
  );
};

export default ChatContainer;
