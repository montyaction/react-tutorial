import React, { createContext } from 'react';
import Page from './Page';
import Page1 from './Page1';
import Page2 from './Page2';

const ThemeContext = createContext('light');

export default function CreateContext() {
    // const [ theme, setTheme ] = useState('light');

  return (
    <ThemeContext.Provider>
        <Page />
        <Page1 />
        <Page2 />
    </ThemeContext.Provider>
  )
}
