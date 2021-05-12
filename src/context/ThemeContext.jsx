import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>  {
  let saveTheme = localStorage.getItem('saveTheme')

   saveTheme === null ? saveTheme = true : saveTheme = JSON.parse(saveTheme);

   let [theme, setTheme] = useState(saveTheme);

   const toggleTheme = () => {
     setTheme(!theme);
     localStorage.setItem('saveTheme', JSON.stringify(!theme));
   }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
