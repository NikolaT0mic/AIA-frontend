const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function getChatGPTResponse(prompt: string): Promise<string> {
  const apiKey = "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";
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      'prompt': prompt,
      'max_tokens': 64,
      'temperature': 0.7,
      'n': 1,
      'stop': '\n',
    }),
  });

  const { choices } = await response.json();
  const { text } = choices[0];
  return text.trim();
}

// Usage example:
const prompt_example = 'Hello, ChatGPT!';

(async () => {
  const response = await getChatGPTResponse(prompt_example);
  console.log(response);
})();