import { OpenAI } from 'openai';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    const prompt = `You are an SEO expert. List 5 short-tail and 5 long-tail keywords for this text, separated by commas
        ${text}`;

    const client = new OpenAI({
      baseURL: "https://router.huggingface.co/v1",
      apiKey: process.env.HF_API_KEY,
    });

    const output = await client.chat.completions.create({
      model: "Qwen/Qwen2.5-7B-Instruct:together",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return res.status(200).json(output.choices[0].message.content);
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}