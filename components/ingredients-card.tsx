import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { cn } from '@/lib/utils';
import { Ingredients } from '@/types/ingredients';

export default function IngredientsCard({
  ingredients,
  setSelectedIngredients,
}: {
  ingredients: Ingredients;
  setSelectedIngredients: Dispatch<SetStateAction<Ingredients[]>>;
}) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelect = () => {
    if (isSelected) {
      setSelectedIngredients((prev) => prev.filter((item) => item.name !== ingredients.name));
    } else {
      setSelectedIngredients((prev) => [...prev, ingredients]);
    }
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={cn(
        'rounded-2xl border-4 p-4 cursor-pointer duration-500 transition border-muted',
        isSelected && 'border-selected bg-selected/10 shadow-lg',
      )}
      onClick={handleSelect}
    >
      <div className='mb-4 flex justify-between'>
        <p
          className={cn(
            'line-clamp-1 font-medium text-muted-foreground transition duration-500',
            isSelected && 'text-foreground',
          )}
        >
          {ingredients.name}
        </p>
        <CircleCheck className={cn('text-muted duration-500 transition', isSelected && 'text-selected')} />
      </div>
      <div
        className={cn(
          'relative aspect-square overflow-hidden duration-500 transition rounded-2xl border-2 scale-90',
          isSelected && 'border-selected scale-100',
        )}
      >
        <Image
          alt={ingredients.name}
          className={cn('object-cover brightness-50 duration-500 transition', isSelected && 'brightness-100')}
          fill
          src={'/no-image.png'}
        ></Image>
      </div>
    </div>
  );
}
