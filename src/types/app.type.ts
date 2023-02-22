export type TTheme = 'LIGHT' | 'DARK';
export type TScreenSize = 'DESKTOP' | 'TABLET' | 'MOBILE';

export type TAppState = {
  isLoading: boolean;
};

export type TAppContextProps = {
  children: React.ReactNode;
};

export interface Size {
  width: number | undefined;
  height: number | undefined;
}
