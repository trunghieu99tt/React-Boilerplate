import { useContextStore } from '@hooks/useContextStore';
import { withContextStore } from 'hoc/withContextStore';
import React, { Dispatch, ReactNode } from 'react';
import { TAppState } from '../../types/app.type';
import { TAppAction, useAppActions } from '../actions';
import { appReducer, initialAppState } from '../reducer';

// create the app context
const AppContext = React.createContext<{
  state: TAppState;
  dispatch: Dispatch<TAppAction>;
}>({
  state: initialAppState,
  dispatch: () => null,
});

// hook to use the app store
export const useAppStore = () => {
  const store = useContextStore<TAppState, TAppAction>({
    context: AppContext,
    useActions: useAppActions,
  });

  return store;
};

// HOC to use the app store
export const withAppStore = (
  WrappedComponent: React.ComponentType<ReactNode>,
) => {
  return withContextStore({
    Context: AppContext,
    initialState: initialAppState,
    reducer: appReducer,
  })(WrappedComponent);
};

export default useAppStore;
