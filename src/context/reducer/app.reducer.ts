import { SET_LOADING, TAppAction } from '@context/actions';
import { TAppState } from '@type/app.type';

export const initialAppState: TAppState = {
  isLoading: false,
};

export const appReducer = (
  state: TAppState = initialAppState,
  action: TAppAction,
) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};
