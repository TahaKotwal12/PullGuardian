// pullguardian-frontend/src/hooks/useWebSocket.ts
import { useEffect, useState } from 'react';

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [lastMessage, setLastMessage] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onmessage = (event) => {
      setLastMessage(JSON.parse(event.data));
    };
    
    setSocket(ws);
    
    return () => ws.close();
  }, [url]);

  return { socket, lastMessage };
};