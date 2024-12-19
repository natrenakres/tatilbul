import { useState } from "react";
import { MessageInputProps } from "../model";
import { Input } from "@/src/shared/ui/input";
import { Button } from "@/src/shared/ui/button";
import { LuSend } from "react-icons/lu";


export function MessageInput({ onSend }: MessageInputProps) {
    const [input, setInput] = useState('');
    const [placeholder, setPlaceholder] = useState('Ask anything...')

    function handleSend() {
        if(input.trim()) {
            onSend(input.trim());
            setInput('');
            setPlaceholder('Hang on, I’m working on it for you...');
        }
    }


    return (        
        <div className='flex items-center space-x-2 gap-4 border-2 p-4 rounded-lg'>
            <Input className='border-none' 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder} />
            <Button onClick={handleSend}>
                <LuSend />
            </Button>
        </div>
    )
}