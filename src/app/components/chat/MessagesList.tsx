import { useMessages } from '@/hooks/gemini/useMessages';
import { semanticColors } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import { UserCircle } from 'solar-icon-set';
import Markdown from 'react-markdown';

const MessagesList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, isLoadingAnswer } = useMessages();

  useEffect(() => {
    scrollRef.current?.lastElementChild?.scrollIntoView();
  }, [messages]);

  // TODO - Make height relative to screen
  return (
    <div>
      <div className='w-full h-[600] pb-3 mx-auto pt-8 overflow-scroll'>
        {messages?.map((message, i) => {
          const isUser = message.role === 'user';
          if (message.role === 'system') return null;

          return (
            <div
              id={`message-${i}`}
              className={`fade-up mb-4 flex items-start ${
                isUser ? 'justify-end' : 'justify-start'
              }`}
              key={i}
              ref={scrollRef}
            >
              {!isUser && <UserCircle size={32} />}
              <div
                style={{
                  maxWidth: '70%',
                  backgroundColor:
                    message.type === 'ERROR'
                      ? semanticColors.dark.danger[100]
                      : '',
                }}
                className={`group relative rounded-lg px-3 py-2 overflow-scroll ${
                  isUser
                    ? 'from-primary-700 to-primary-600 mr-2 bg-gradient-to-br text-white'
                    : 'ml-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                <Markdown>{message.content?.toString()}</Markdown>
              </div>
              {isUser && <UserCircle size={32} />}
            </div>
          );
        })}
      </div>

      <div className='h-[30] mb-4 flex items-end'>
        {isLoadingAnswer && (
          <div className='loader relative ml-2 flex items-center justify-between space-x-1.5 rounded-full bg-gray-200 p-2.5 px-4 dark:bg-gray-800'>
            <span className='block h-3 w-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></span>
            <span className='block h-3 w-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></span>
            <span className='block h-3 w-3  bg-gray-400 rounded-full animate-bounce'></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesList;
