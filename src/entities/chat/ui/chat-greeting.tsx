import { LuBot } from 'react-icons/lu';

export function ChatGreeting() {
  return (
    <div className='greeting'>
      <h1 className='text-4xl'>Where to travel next?</h1>
      <div className='flex items-center gap-4'>
        <LuBot size='4rem' />
        <p>Hi there! Where are you planning to go? I’m here to help with anything travel-related—feel free to ask!</p>
      </div>
    </div>
  );
}
