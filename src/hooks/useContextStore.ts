import React from 'react';

export interface IUseContextStoreArgs<S, A> {
  context: React.Context<{
    state: S;
    dispatch: React.Dispatch<A>;
  }>;
  useActions: (dispatch: React.Dispatch<A>) => Record<string, any>;
}

export const useContextStore = <S, A>({
  context,
  useActions,
}: IUseContextStoreArgs<S, A>) => {
  const { state, dispatch } = React.useContext(context);
  const actions = useActions(dispatch);
  return { state, actions };
};
