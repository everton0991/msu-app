import { Message } from '@/hooks/gemini/useMessages';

export async function sendMessage(message: Message) {
  try {
    const response = await fetch('/api/gemini/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message.content }),
    });

    return await response.json();
  } catch (error: any) {
    // TODO - Assert type correctly
    console.log({ error });
  }
}
