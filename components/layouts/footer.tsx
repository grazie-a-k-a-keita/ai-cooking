import { format } from 'date-fns';

export default function Footer() {
  return (
    <footer className='sticky top-full border-t bg-background'>
      <div className='container flex h-20 items-center justify-center'>
        <p className='text-sm text-muted-foreground'>Copyright © {format(new Date(), 'yyyy')} Grazie</p>
      </div>
    </footer>
  );
}
