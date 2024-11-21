import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import OpenAI from 'openai';
import { sendMessage } from '@/pages/api/openai/sendMessage';

interface ContextProps {
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

// TODO Move jsx content to different dir
const ChatsContext = createContext<Partial<ContextProps>>({});

export function OpenAiMessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<
    OpenAI.Chat.ChatCompletionMessageParam[]
  >([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.',
      };

      const welcomeMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: 'assistant',
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

    try {
      const newMessage: OpenAI.Chat.ChatCompletionMessageParam = {
        role: 'user',
        content,
      };
      const newMessages = [...messages, newMessage];

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages);
      const { data } = await sendMessage(newMessages);
      const reply = data.choices[0].message;

      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error when something goes wrong
      console.log({ title: 'An error occurred', type: 'error' });
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
