import { useMessages } from '@/hooks/gemini/useMessages';
import { Button, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const MessageForm = () => {
  const t = useTranslations('Chat');
  const [message, setMessage] = useState('');
  const { addMessage, isLoadingAnswer } = useMessages();

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    addMessage(message);
    setMessage('');
  };

  return (
    <div className='flex items-center justify-between gap-4'>
      <Input
        type='text'
        label={t('Message')}
        placeholder={t('Type your message')}
        value={message}
        disabled={isLoadingAnswer}
        onChange={(e: any) => setMessage(e.target.value)}
        onKeyUp={(e) => (e.key === 'Enter' ? handleSubmit(e) : null)}
        autoFocus
      />

      <Button
        size='lg'
        isDisabled={!message || isLoadingAnswer}
        className='bg-gradient-to-tr from-[#9fb7ff] to-[#9874DC] text-white shadow-lg disabled:'
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
};

export default MessageForm;
