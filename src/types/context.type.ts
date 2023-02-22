export interface IAction {
  type: string;
  payload: unknown;
}

export type TActionMap<M> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type TActions<S> = TActionMap<S>[keyof TActionMap<S>];
