import { useMessages } from '@/hooks/gemini/useMessages';
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const { addMessage } = useMessages();

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    addMessage(message);
    setMessage('');
  };

  return (
    <div className='flex items-center justify-between gap-4'>
      <Input
        type='text'
        label='Message'
        placeholder='Type your message'
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        autoFocus
      />

      <Button
        size='lg'
        isDisabled={!message}
        className='bg-gradient-to-tr from-[#9fb7ff] to-[#9874DC] text-white shadow-lg disabled:'
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
};

export default MessageForm;
