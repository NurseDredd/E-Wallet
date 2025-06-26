import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../Redux/themeSlice';
import styles from './theme.module.css';

const ThemeOptions = () => {
   const dispatch = useDispatch()
   const currentTheme = useSelector((state) => state.theme.theme);

   const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  return (
    <div className={styles.themeContainer}>
      <h2 className={styles.themeTitle}>Choose Theme</h2>
      <div className={styles.themeSelector}>
        <select 
          name='themeOptions' 
          value={currentTheme} 
          onChange={handleThemeChange}
          className={styles.themeSelect}
        >
          <option value="light">Light mode</option>
          <option value="dark">Dark mode</option>
          <option value="blue">Blue mode</option>
        </select>
      </div>
    </div>
  )
}

export default ThemeOptions