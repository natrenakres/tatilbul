
export type Role = 'user' | 'assistant';

export type Message = {
    id: string;
    role: Role;
    content: string;
}

export interface ChatWindowProps {
    messages: Message[];
}

export interface MessageInputProps {
    onSend: (text: string) => void;
  }