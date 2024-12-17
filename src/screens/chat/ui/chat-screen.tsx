import { TheChat } from '@/src/entities/chat/ui/the-chat';

export async function ChatScreen() {
  return (
    <main className='mx-auto max-w-7xl px-4 py-6 h-[80vh]'>
      <TheChat />
    </main>
  );
}
