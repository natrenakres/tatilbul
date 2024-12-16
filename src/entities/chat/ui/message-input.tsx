import { useState } from "react";
import { MessageInputProps } from "../model";


export function MessageInput({ onSend }: MessageInputProps) {
    const [input, setInput] = useState('');

    function handleSend() {
        if(input.trim()) {
            onSend(input.trim());
            setInput('');
        }
    }


    return (
        <div className="message-input flex items-center space-x-2 mt-4">
            <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                />
            <button 
                onClick={handleSend}
                className="p-2 bg-primary text-primary-foreground rounded-md hover:border-secondary">
                Send
            </button>


        </div>
    )
}