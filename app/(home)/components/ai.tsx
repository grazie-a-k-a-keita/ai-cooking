'use client';

import { experimental_useObject as useObject } from 'ai/react';
import Link from 'next/link';
import { CookingPot } from 'lucide-react';
import { recipeSchema } from '@/app/api/recipes/schema';
import { Button } from '@/components/ui/button';
import IngredientsCard from '@/components/ingredients-card';

export default function Ai() {
  const { isLoading, stop, object, submit, error } = useObject({
    api: '/api/recipes',
    schema: recipeSchema,
  });

  const handleGenerate = () => {
    submit({
      ingredients: ['肉', '玉ねぎ', 'じゃがいも'],
      remarks: '簡単',
    });
  };

  return (
    <div className='py-8'>
      {error && <div>An error occurred.</div>}

      {isLoading && (
        <div>
          <p>Loading...</p>
          <button onClick={() => stop()} type='button'>
            Stop
          </button>
        </div>
      )}

      <div className='grid grid-cols-6 gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <IngredientsCard key={index} />
        ))}
      </div>

      <div className='flex justify-center'>
        <Button onClick={handleGenerate}>
          <CookingPot /> 料理を生成する
        </Button>
      </div>

      {object?.recipes?.map((recipes, index) => (
        <div key={index}>
          <Link href={recipes?.referenceSites || ''}>{recipes?.dishName}</Link>
        </div>
      ))}
    </div>
  );
}
