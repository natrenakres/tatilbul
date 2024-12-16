import { ChatWindowProps } from "../model";


export function ChatWindow({ messages }: ChatWindowProps) {


    return (
        <div className="chat-window bg-gray-100 p-4 rounded-md h-96 overflow-y-scroll">
            {
                messages.map(message => (
                    <div key={message.id}
                        className={`message mb-2 p-2 rounded-md ${
                            message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-gray-300 text-black self-start'
                        }`}
                    >
                        {message.content}
                    </div>
                ))
            }
        
        </div>
    )



}