import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import VideoModal from './components/VideoModal';
import GlobalStyles from './styles/global';
import Routes from './routes';
import AppProvider from './context/AppContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
        <VideoModal />
      </AppProvider>
    </>
  );
};

export default App;
