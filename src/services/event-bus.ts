import { Subject } from 'rxjs';

export interface BaseEventType {
  type: EventBusName;
  payload?: any;
}

export interface BaseEvent<Payload> {
  type: EventBusName;
  payload?: Payload;
}

export enum EventBusName {
  LOGOUT = 'LOGOUT',
}

export default class EventBus {
  private static instance: EventBus;

  private eventSubject = new Subject();

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  get events(): any {
    return this.eventSubject.asObservable();
  }

  post<T extends BaseEventType>(event: T): void {
    this.eventSubject.next(event);
  }
}

export const onPushEventBus = (type: EventBusName, payload?: any) => {
  EventBus.getInstance().post({ type, payload });
};
