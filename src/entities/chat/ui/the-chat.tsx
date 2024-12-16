'use client';

import { useState } from 'react';
import { ChatWindow } from './chat-window';
import { MessageInput } from './message-input';
import { Message } from '../model';
import { chatWithTatilbul } from '../actions/chatWithTatilbul';

export function TheChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  async function handleSend(text: string) {
    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: text,
    };

    try {
      const botMessage = await chatWithTatilbul({
        role: userMessage.role,
        content: userMessage.content,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-typing`,
          role: 'assistant',
          content: 'Typing...',
        },
      ]);

      setMessages((prev) => [
        ...prev,
        {
          id: botMessage.id!,
          role: 'assistant',
          content: botMessage.content.toString(),
        },
      ]);
    } catch (error: unknown) {
      console.error('Error fetching bot response:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: 'assistant',
          content: 'Something went wrong. Please try again.',
        },
      ]);
    }
  }

  return (
    <div className='chat bg-white p-4 shadow-md rounded-md max-w-lg mx-auto'>
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
