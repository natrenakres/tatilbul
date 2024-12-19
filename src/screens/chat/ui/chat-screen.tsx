import { TheChat } from '@/src/entities/chat/ui/the-chat';

export async function ChatScreen() {
  return (
      <section className='h-[75vh]'>
        <TheChat />    
      </section>
  );
}
