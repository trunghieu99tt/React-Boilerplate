import { useEffect } from 'react';
import { useAppContext } from '@context/app.context';
import { SocketConnector } from './socket';

export const useSocket = (): void => {
  const { dispatch } = useAppContext();

  const initSocket = () => {
    const socketConnector = new SocketConnector();
    const socketInstance = socketConnector.instance;

    socketInstance.on('connect', () => {
      console.log('Connected');
      dispatch({ type: 'SET_SOCKET', payload: socketInstance });
    });
  };

  useEffect(() => {
    initSocket();
  }, []);
};
