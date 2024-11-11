import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function IngredientsCard() {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div
      className={cn(
        'rounded-2xl border-4 p-4 cursor-pointer duration-500 transition border-muted',
        isSelected ? 'border-selected bg-selected/10' : '',
      )}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className='mb-4 flex justify-between'>
        <p
          className={cn(
            'line-clamp-3 font-medium text-muted-foreground transition duration-500',
            isSelected && 'text-foreground',
          )}
        >
          鶏肉
        </p>
        <CircleCheck className={cn('text-muted duration-500 transition', isSelected && 'text-selected')} />
      </div>
      <div
        className={cn(
          'relative aspect-square overflow-hidden duration-500 transition rounded-2xl border-2',
          isSelected && 'border-selected',
        )}
      >
        <Image
          alt=''
          className={cn('object-cover brightness-50 duration-500 transition', isSelected && 'brightness-100')}
          fill
          src='data:image/jpeg;base64,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'
        ></Image>
      </div>
    </div>
  );
}