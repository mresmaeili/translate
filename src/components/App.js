import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LaguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LaguageSelector />
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
export default App;
