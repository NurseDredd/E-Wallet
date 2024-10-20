import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../Redux/themeSlice';

const ThemeOptions = () => {
   const dispatch = useDispatch()
   const currentTheme = useSelector((state) => state.theme.theme);

   const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  return (
    <div><label htmlFor="themeOptions">Choose Theme</label>
        <select name='themeOptions' value= {currentTheme}  onChange={handleThemeChange}>
            <option value="light">Light mode</option>
            <option value="dark">Dark mode</option>
            <option value="blue">Blue mode</option>
        </select>
    </div>
  )
}

export default ThemeOptions