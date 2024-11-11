import { openai } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { Payload } from '@/types/payload';
import { recipeSchema } from './schema';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const context: Payload = await req.json();

  let prompt = '日本語で料理のレシピを5つ生成します:';

  if (context.ingredients.length > 0) {
    prompt += '使用食材:' + context.ingredients.join(',');
  }

  if (context.remarks) {
    prompt += '備考:' + context.remarks;
  }

  const result = await streamObject({
    model: openai('gpt-3.5-turbo-0125'),
    schema: recipeSchema,
    prompt: prompt,
  });

  return result.toTextStreamResponse();
}
