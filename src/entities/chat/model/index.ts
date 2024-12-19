import { Hotel } from "../../hotels/model";

export type Role = 'user' | 'assistant';

export type Message = {
    id: string;
    role: Role;
    content: string;
}

export interface ChatWindowProps {
    hotel: Hotel;
    prompt: string,
    onNewChat: () => void;
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