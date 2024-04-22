const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Замените 'YOUR_API_KEY' на ваш API-ключ для доступа к ChatGPT API
  const apiKey = 'sk-proj-gApFvCbdWg6cAPdcdY4iT3BlbkFJ9q0EnT1EPNwHfhi27lr9';
  
  // Получение текста из запроса
  const { text } = req.body;
  
  // Проверка на наличие текста в запросе
  if (!text) {
    return res.status(400).json({ error: 'Missing text parameter' });
  }
  
  try {
    // Запрос к API ChatGPT
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-002', // Модель ChatGPT, которую вы хотите использовать
        messages: [
          { role: 'system', content: 'You: ' + text }
        ]
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch response from ChatGPT API');
    }
    
    const data = await response.json();
    
    // Возвращение ответа в формате JSON
    res.status(200).json({ response: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
