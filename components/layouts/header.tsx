import { ModeToggle } from '../mode-toggle';

export default function Header() {
  return (
    <header className='h-16 border-b bg-background'>
      <div className='container flex h-full items-center justify-between'>
        <h1 className='text-lg font-black'>AI Cooking</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
