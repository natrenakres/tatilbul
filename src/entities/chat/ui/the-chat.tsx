'use client';

import { useState } from 'react';
import { ChatWindow } from './chat-window';
import { MessageInput } from './message-input';
import { Message } from '../model';
import { mainChat } from '..';
import { MapContainer } from '../../hotels/ui/map-container';
import { Hotel } from '../../hotels/model';

export function TheChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const[hotel, setHotel]  = useState<Hotel | undefined | null>(null);

  async function handleSend(text: string) {
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
        longitude: chatOutput?.longitude
      };

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          role: 'assistant',
          content: `
            Name: ${chatOutput?.name} \n
            Description: ${chatOutput?.description} \n
            Address: ${chatOutput?.address} \n
            Star: ${chatOutput?.star} \n
            Lat: ${chatOutput?.latitude} \n
            Lng: ${chatOutput?.longitude} \n
            Image: ${chatOutput?.image} \n
            Link: ${chatOutput?.link} \n
          `,
        },
      ]);

      setHotel(hotel)

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
    <section className='grid grid-flow-col'>
      <div className='bg-white p-4 shadow-md rounded-md max-w-lg'>
        <ChatWindow messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
      <div className='bg-white p-4 shadow-md rounded-md max-w-lg'>
        {
          hotel &&  <MapContainer hotel={hotel} />
        }
      </div>
    </section>
  );
}
