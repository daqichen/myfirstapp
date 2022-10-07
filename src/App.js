import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.scss';


import ThemeSetter from './components/ThemeSetter'; // JEDI
import ThemeContext, {initialThemeState} from './components/ThemeContext';

/*
  JEDI (Modular Approach)
*/
// const initialThemeState = {
//   theme: "light",
//   setTheme: () => null
// };

// const ThemeContext = React.createContext(initialThemeState);
/* => ./components/ThemeContext.js */

const App = () => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  return (
    /*
      NOVICE (useContext, useState)
    */
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ThemeSetter />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div> 
        </div>
    </ThemeContext.Provider>
  );
}


/*
  JEDI (Modular Approach)
*/
// const themeOptions = [{ value: "light" }, { value: "dark" }];

// export const ThemeSetter = () => {
//   const {theme, setTheme} = useContext(ThemeContext)
//   return (
//     <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
//       {themeOptions.map((option, idx) => (
//         <option value={option.value} key={idx}>
//           {option.value}
//         </option>
//       ))}
//     </select>
//   );
// }
/* => ./components/ThemeSetter.js */


export default App;
