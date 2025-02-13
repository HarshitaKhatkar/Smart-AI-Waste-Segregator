import OpenAI from 'openai';

// Check if API key exists
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.warn('OpenAI API key is missing. Chat functionality will be limited to mock responses.');
}

const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  dangerouslyAllowBrowser: true
});

export const generateChatResponse = async (messages: { role: string; content: string; }[]) => {
  if (!apiKey) {
    // Return mock response if no API key is present
    return "I'm sorry, but I can't process your request right now. Please make sure the OpenAI API key is properly configured.";
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};