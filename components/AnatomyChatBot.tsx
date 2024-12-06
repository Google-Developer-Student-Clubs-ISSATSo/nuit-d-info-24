'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export function AnatomyChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
      messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

    function getPreviousResponses(messages: ChatMessage[]) {
        const userMessages = messages.filter((msg) => msg.sender === 'user');
        const botMessages = messages.filter((msg) => msg.sender === 'bot');
        const responses = [];
        for (let i = 0; i < userMessages.length; i++) {
            responses.push({ role: 'human', content: userMessages[i].text });
            responses.push({ role: 'assistant', content: botMessages[i].text });
        }
        return responses;
    }
  const parseMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part; 
    });
  };
  useEffect(() => {
    if(messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          text: 'Bonjour! Je suis Anatomy Chatbot. Comment puis-je vous aider?',
          sender: 'bot'
        }
      ]);
    }
  }, []);
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://nuit-info-2024.onrender.com/ocean_equivalence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ corps_name: inputMessage, previous_responses: getPreviousResponses(messages) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data)

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot'
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
        id: Date.now() + 2,
        text: 'Sorry, there was an error processing your request.',
        sender: 'bot'
      };

      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="icon" className="fixed bottom-4 right-4">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[500px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Anatomy Chatbot</DialogTitle>
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto space-y-2 pr-2">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div 
                className={`max-w-[70%] p-2 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-black'
                }`}
              >
                {parseMessageText(msg.text)}
                </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 p-2 rounded-lg">
                Typing...
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-2 mt-auto text-black">
          <Input 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about human anatomy..."
            className="flex-grow"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !inputMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div ref={messagesEndRef} />

      </DialogContent>
    </Dialog>
  );
}