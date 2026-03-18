import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/extract-keywords', async (req, res) => {
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

    res.json(output.choices[0].message.content);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
