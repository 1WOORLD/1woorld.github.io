import { DeepSeek } from '@deepseek/api';
const deepseek = new DeepSeek('API_KEY');

export function moderateContent(text) {
  return deepseek.moderate(text);
}
