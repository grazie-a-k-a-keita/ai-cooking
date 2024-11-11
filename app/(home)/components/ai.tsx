'use client';

import { experimental_useObject as useObject } from 'ai/react';
import Link from 'next/link';
import { CookingPot } from 'lucide-react';
import { useState } from 'react';
import { recipeSchema } from '@/app/api/recipes/schema';
import { Button } from '@/components/ui/button';
import IngredientsCard from '@/components/ingredients-card';
import { Ingredients } from '@/types/ingredients';
import { ingredients } from '@/data/data';
import { Input } from '@/components/ui/input';

export default function Ai() {
  const { isLoading, stop, object, submit, error } = useObject({
    api: '/api/recipes',
    schema: recipeSchema,
  });

  const [selectedIngredients, setSelectedIngredients] = useState<Ingredients[]>([]);
  const [inputRemarks, setInputRemarks] = useState('');

  const handleGenerate = () => {
    submit({
      ingredients: selectedIngredients.map((item) => item.name),
      remarks: inputRemarks,
    });
  };

  // const dummy = [
  //   {
  //     dishName: 'きゅうりの漬物',
  //     description: '新鮮なきゅうりを使って作る伝統的な日本の漬物。塩と酢を使ってさっぱりとした味わいに仕上げます。',
  //     referenceSites: 'https://www.justonecookbook.com/sunomono-cucumber-salad-recipe/',
  //   },
  //   {
  //     dishName: 'きゅうりの冷やし中華',
  //     description: '夏にぴったりの爽やかな冷やし中華。きゅうりをたっぷりと使い、酢としょうゆで味付けします。',
  //     referenceSites: 'https://www.lettuceeatcucumber.com/chilled-cucumber-noodles/',
  //   },
  //   {
  //     dishName: 'きゅうりのサラダ',
  //     description: 'シンプルで爽やかなきゅうりのサラダ。オリーブオイルとレモン汁で軽やかなドレッシングを作ります。',
  //     referenceSites: 'https://www.justonecookbook.com/japanese-cucumber-salad/',
  //   },
  //   {
  //     dishName: 'きゅうりのスムージー',
  //     description:
  //       '健康的で栄養満点のきゅうりスムージー。バナナやヨーグルトと一緒にブレンドしてさわやかな飲み物にします。',
  //     referenceSites: 'https://www.lettuceeatcucumber.com/cucumber-smoothie/',
  //   },
  //   {
  //     dishName: 'きゅうりの天ぷら',
  //     description:
  //       'サクサクの衣と新鮮なきゅうりが絶妙な組み合わせのきゅうりの天ぷら。ポン酢で食べるとさらに美味しいです。',
  //     referenceSites: 'https://www.justonecookbook.com/cucumber-tempura/',
  //   },
  // ];

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

      <div className='mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {ingredients.map((item, index) => (
          <IngredientsCard ingredients={item} key={index} setSelectedIngredients={setSelectedIngredients} />
        ))}
      </div>

      <div className='mx-auto mb-8 flex max-w-xl flex-col space-y-4 '>
        <Input
          maxLength={20}
          onChange={(e) => setInputRemarks(e.target.value)}
          placeholder='備考を入力してください'
          value={inputRemarks}
        />
        <Button onClick={handleGenerate}>
          <CookingPot /> 料理を生成する
        </Button>
      </div>

      <div className='space-y-4'>
        {object?.recipes?.map((recipes, index) => (
          <div className='space-y-4 rounded-2xl border p-8' key={index}>
            <p className='text-lg font-semibold'>{recipes?.dishName}</p>
            <p>{recipes?.description}</p>
            <Button asChild variant='link'>
              <Link href={recipes?.referenceSites || ''} target='_blank'>
                {recipes?.referenceSites}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
