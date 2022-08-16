import { useEffect } from 'react';
import { Subscription } from 'rxjs';
import EventBus, { EventBusName } from 'services/event-bus';

export const useApp = () => {
  const subscription = new Subscription();

  const registerEventBus = () => {
    subscription.add(
      EventBus.getInstance().events.subscribe((event: any) => {
        if (event.type === EventBusName.LOGOUT) {
          // do logout stuff
        }
      }),
    );
  };

  useEffect(() => {
    registerEventBus();

    return () => {
      subscription.unsubscribe();
    };
  }, []);
};
