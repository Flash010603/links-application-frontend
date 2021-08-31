import React, { useState } from 'react'

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Background } from './components/ui/Background';
import { LinkProvider } from './context/LinkContext';
import { Form } from './components/Form';



export const App: React.FC = () => {

  const [state, setState] = useState(false);

    const handleChange = () => {
        setState(!state)
    };


  return (
    <ContextProvider>
      <input type="checkbox" name="" id="modal" onChange={handleChange}/>
      <div className={`${ (state) ? 'container_OpenModal': 'container' }`}>
        <Header />
        <Main />
        <Background />
      </div>
      {(state) && <Form />}
      </ContextProvider>
    
  )
}


const ContextProvider: React.FC = (({ children }) => {
  return (
    <LinkProvider>
        {children}
    </LinkProvider>
  )
})