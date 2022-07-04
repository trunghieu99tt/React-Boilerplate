import React from 'react';
import { AppDispatch, RootState } from 'store';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from 'redux/user/user.slice';
import { setLanguage, setTheme } from '@redux/app/app.slice';
import { useTranslation } from 'react-i18next';
import { fetchUsers } from '@redux/user/user.async-action';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state: RootState) => state.userState.user);
  const users = useSelector((state: RootState) => state.userState.users);
  const isLoading = useSelector(
    (state: RootState) => state.userState.isLoading,
  );
  const currentTheme = useSelector((state: RootState) => state.appState.theme);
  const currentLanguage = useSelector(
    (state: RootState) => state.appState.language,
  );
  const dispatch = useDispatch<AppDispatch>();

  const onClickSetUser = () => {
    dispatch(
      setUser({
        name: 'John',
      }),
    );
  };

  const onClickChangeTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  const onChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  const onFetchUser = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="app" data-theme={currentTheme}>
      {user ? (
        <div>Hello {user.name}</div>
      ) : (
        <button onClick={onClickSetUser}>Click here to set user</button>
      )}
      <button
        onClick={onClickChangeTheme}
        style={{
          backgroundColor: 'var(--blue)',
        }}
      >
        Click here to change theme
      </button>
      <button onClick={onChangeLanguage}>Click here to change language</button>
      <p>{t('hello')}</p>
      <button onClick={onFetchUser}>Fetch user</button>
      {isLoading && <div>Loading...</div>}
      {users?.map((u) => {
        return <p>{u.name}</p>;
      })}
    </div>
  );
};

export default App;
