'use client';
import { useState } from 'react';
import { ChatWindow } from './chat-window';
import { MessageInput } from './message-input';
import { Message } from '../model';
import { mainChat } from '..';
import { MapContainer } from '../../hotels/ui/map-container';
import { Hotel } from '../../hotels/model';
import { ChatGreeting } from './chat-greeting';

export function TheChat() {
  const [promt, setPrompt] = useState<string>('');
  const [hotel, setHotel] = useState<Hotel | undefined | null>(null);

  async function handleSend(text: string) {
    setPrompt(text);
    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: text,
    };

    try {
      const chatOutput = await mainChat({
        id: `${Date.now()}-user`,
        role: userMessage.role,
        content: userMessage.content,
      });

      const hotel: Hotel = {
        name: chatOutput?.name,
        star: chatOutput?.star,
        address: chatOutput?.address,
        description: chatOutput?.description,
        image: chatOutput?.image,
        latitude: chatOutput?.latitude,
        longitude: chatOutput?.longitude,
      };      
      setHotel(hotel)
    } catch (error: unknown) {
      console.error('Error fetching bot response:', error);
      setPrompt('Something went wrong. Please try again.');
    }
  }

  function newChat() {
    setHotel(null);
    setPrompt('');
  }

  return (
    <section>
      {hotel ? (
        <>
          <ChatWindow hotel={hotel} prompt={promt} onNewChat={newChat} />
          <MapContainer hotel={hotel} />
        </>
      ) : (
        <>
          <ChatGreeting />
          <MessageInput onSend={handleSend} />
        </>
      )}
    </section>
  );
}
