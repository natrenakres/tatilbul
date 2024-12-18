
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

export type ChatOutput = {
    name: string;
    description: string;
    address: string;
    star: number;
    latitude: number;
    longitude: number;
    link?: string | undefined;
    image?: string | undefined;
}