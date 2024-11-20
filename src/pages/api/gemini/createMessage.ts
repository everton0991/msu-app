import { NextApiRequest, NextApiResponse } from 'next';

export default async function createMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const body = JSON.stringify({
    contents: [
      {
        parts: [{ text: message }],
      },
    ],
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.json();
    res.status(200).json({ data });
  } catch (error: any) {
    // TODO - Assert type correctly
    res.status(500).json({ error: error.message });
  }
}
