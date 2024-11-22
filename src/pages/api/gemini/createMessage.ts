import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function createMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const { response } = await model.generateContent(message);
    res.status(200).json({ data: response });
  } catch (error: any) {
    // TODO - Assert error type correctly
    res.status(500).json({ error: error.message });
  }
}
