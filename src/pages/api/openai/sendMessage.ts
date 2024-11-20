import OpenAI from 'openai';

export async function sendMessage(
  messages: OpenAI.Chat.ChatCompletionMessageParam[]
) {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    return await response.json();
  } catch (error: any) {
    // TODO - Assert type correctly
    console.log({ error });
  }
}
