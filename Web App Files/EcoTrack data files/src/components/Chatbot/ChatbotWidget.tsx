import React, { useState } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import useChat from '../../hooks/useChat';
import ChatMessage from './ChatMessage';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { messages, isLoading, error, sendMessage } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-card-bg text-neon-blue rounded-full shadow-neon hover:shadow-neon-hover transition-all duration-300 group animate-glow"
        >
          <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      <div
        className={`fixed bottom-6 right-6 w-80 bg-card-bg rounded-xl shadow-neon transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-border-color flex justify-between items-center">
          <h3 className="font-semibold text-neon-blue flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI Assistant
          </h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-text-secondary hover:text-neon-blue transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-96 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-neon-blue" />
              </div>
            )}
            {error && (
              <div className="text-sm text-red-500 text-center">{error}</div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-border-color">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-app-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !message.trim()}
              className="p-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatbotWidget;