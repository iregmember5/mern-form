const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/generate', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  try {
    const prompt = `Generate a friendly message to send to a contact named ${name} whose email is ${email}. Keep it short and polite.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 60,
    });

    const generatedMessage = completion.choices[0].message.content.trim();
    res.json({ message: generatedMessage });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: 'Failed to generate message' });
  }
});

module.exports = router;
