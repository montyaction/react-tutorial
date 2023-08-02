import React, { createContext} from 'react';

const ThemeContext = createContext();
export default function Page({themes}) {
  return (
    <ThemeContext.Consumer>
      <h2>Page</h2>
      <h3>{themes}</h3>
    </ThemeContext.Consumer>
  );
}
