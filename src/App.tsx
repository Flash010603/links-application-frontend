import React from 'react'
import { toast } from 'react-toastify';

import { Footer } from './components/Footer';
import { LayoutHome } from './components/Layout/LayoutHome';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ModalProvider } from './context/ModalContext';
import { Background } from './components/Background';

toast.configure();

export const App: React.FC = () => {

  return (
    <ContextProvider>
      <LayoutHome>
          <Header />
          <Main />
        <Footer />
      <Background/>
      </LayoutHome>
    </ContextProvider>
  )
}


const ContextProvider: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
};