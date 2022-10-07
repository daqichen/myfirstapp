import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

const themeOptions = [{ value: "light" }, { value: "dark" }];

const ThemeSetter = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        {themeOptions.map((option, idx) => (
            <option value={option.value} key={idx}>
            {option.value}
            </option>
        ))}
        </select>
    );
}

export default ThemeSetter;
