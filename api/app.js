import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

  
app.post('/api/extract-keywords', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    // STEP 1: Use the API to brainstorm keywords (The "Brain")
        const prompt = `You are an SEO expert. List 5 short-tail and 5 long-tail keywords for this text, separated by commas 
        ${text}`;

        const client = new OpenAI({
          baseURL: "https://router.huggingface.co/v1",
	        apiKey: process.env.HF_API_KEY,
        })

        
          const output = await client.chat.completions.create({
          model: "Qwen/Qwen2.5-7B-Instruct:together",
          messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    // for await (const chunk of stream) {
	  //   if (chunk.choices && chunk.choices.length > 0) {
		//   const newContent = chunk.choices[0].delta.content;
		//   out += newContent;
		// console.log(newContent);
    res.json(output.choices[0].message.content);
	  //}
  //}

       
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ 
      error: "Failed to extract keywords", 
      details: error.message || "Unknown error"
    });
  }
});

// Catch-all for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
