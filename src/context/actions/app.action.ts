import { TActions } from '@type/index';
import React from 'react';

export const SET_LOADING = 'SET_LOADING';
export const SET_USER = 'SET_USER';

export interface IAppActionPayload {
  [SET_LOADING]: {
    isLoading: boolean;
  };
  [SET_USER]: {
    user: any;
  };
}

export type TAppAction = TActions<IAppActionPayload>;

export const useAppActions = (dispatch: React.Dispatch<TAppAction>) => {
  const setLoading = React.useCallback(
    (isLoading: boolean) => {
      dispatch({
        type: SET_LOADING,
        payload: {
          isLoading,
        },
      });
    },
    [dispatch],
  );

  return {
    setLoading,
  };
};
