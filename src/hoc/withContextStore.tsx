import { ReactNode, useMemo, useReducer } from 'react';

export const withContextStore = <S, A>({
  Context,
  initialState,
  reducer,
}: {
  Context: React.Context<{
    state: S;
    dispatch: React.Dispatch<A>;
  }>;
  initialState: S;
  reducer: (state: S, action: A) => S;
}) => {
  return <P extends Record<string, any>>(
    WrappedComponent: React.ComponentType<ReactNode>,
  ) => {
    return (props: P) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
      return (
        <Context.Provider value={value}>
          <WrappedComponent {...props} />
        </Context.Provider>
      );
    };
  };
};
