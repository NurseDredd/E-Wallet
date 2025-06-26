import ThemeOptions from '../components/ThemeOptions/ThemeOptions'
import DeleteAllBtn from '../components/DeleteAllBtn/DeleteAllBtn'
import styles from './settings.module.css'

const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.title}>Settings</h2>
      <div className={styles.settingsContent}>
        <ThemeOptions/>
        <DeleteAllBtn/>
      </div>
    </div>
  )
}

export default Settings