import { useState, useEffect } from 'react';

export function useWebSocket(url: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    return () => ws.close();
  }, [url]);

  return data;
}