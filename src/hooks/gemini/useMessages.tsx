import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { sendMessage } from '@/pages/api/gemini/sendMessage';
import { EnhancedGenerateContentResponse } from '@google/generative-ai';

export interface Message {
  role: 'system' | 'user' | 'model';
  type: 'MESSAGE' | 'ERROR';
  content: string | EnhancedGenerateContentResponse | undefined;
}

interface ContextProps {
  messages: Array<Message>;
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

// TODO Move jsx content to different dir
const ChatsContext = createContext<Partial<ContextProps>>({});

export function GeminiMessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: Message = {
        role: 'system',
        type: 'MESSAGE',
        content: 'You are ChatGPT, a large language model trained by OpenAI.',
      };

      const welcomeMessage: Message = {
        role: 'model',
        type: 'MESSAGE',
        content: 'Hi, How can I help you today?',
      };

      setMessages([systemMessage, welcomeMessage]);
    };

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);

    const newMessage: Message = {
      role: 'user',
      type: 'MESSAGE',
      content,
    };

    try {
      const newMessages = [...messages, newMessage];

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages);
      const data = await sendMessage(newMessage);
      // TODO - Get message content when model is responsive
      const reply: Message = {
        content: data.data?.error
          ? data.data?.error.message.toString()
          : data.data?.candidates[0].content.parts[0].text,
        type: !data.data?.error ? 'MESSAGE' : 'ERROR',
        role: 'model',
      };

      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error when something goes wrong
      setMessages([
        ...messages,
        newMessage,
        {
          role: 'model',
          content: `An error occurred: ${error?.toString()}`,
          type: 'ERROR',
        },
      ]);
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
