import { useMessages } from '@/hooks/gemini/useMessages';
import { semanticColors } from '@nextui-org/react';
import Image from 'next/image';
import { UserCircle, ChatDots } from 'solar-icon-set';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  if (!messages.length) {
    return (
      <div className='w-full flex justify-center items-center'>
        <Image
          src='/assets/png/hand-drawn-illustration.png'
          alt='Empty State'
          width={500}
          height={500}
        />
      </div>
    );
  }

  return (
    <div>
      <div className='w-full h-[500] pb-3 mx-auto pt-8 overflow-scroll'>
        {messages?.map((message, i) => {
          const isUser = message.role === 'user';
          if (message.role === 'system') return null;

          return (
            <div
              id={`message-${i}`}
              className={`fade-up mb-4 flex items-center ${
                isUser ? 'justify-end' : 'justify-start'
              }`}
              key={i}
            >
              {!isUser && <UserCircle size={32} />}
              <div
                style={{
                  maxWidth: 'calc(100% - 45px)',
                  backgroundColor:
                    message.type === 'ERROR'
                      ? semanticColors.dark.danger[100]
                      : '',
                }}
                className={`group relative rounded-lg px-3 py-2 ${
                  isUser
                    ? 'from-primary-700 to-primary-600 mr-2 bg-gradient-to-br text-white'
                    : 'ml-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                {message.content?.toString()}
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
