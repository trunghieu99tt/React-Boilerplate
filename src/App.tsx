import useAppStore, { withAppStore } from '@context/store/app.context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const {
    state: { isLoading: isAppLoading },
    actions: { setLoading },
  } = useAppStore();

  return <div>Hello world</div>;
};

export default withAppStore(App);
