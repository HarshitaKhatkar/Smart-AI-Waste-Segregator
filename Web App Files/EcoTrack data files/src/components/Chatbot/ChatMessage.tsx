import React from 'react';
import { Message } from '../../types/chat';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === 'assistant';

  return (
    <div className={`flex gap-3 ${isBot ? 'bg-sage/10' : ''} p-3 rounded-lg`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-sage text-white' : 'bg-forest text-white'
      }`}>
        {isBot ? <Bot size={18} /> : <User size={18} />}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800">{message.content}</p>
        <span className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;