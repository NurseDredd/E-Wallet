import { Link } from "react-router-dom";
import styles from './AddCardNavBtn.module.css';

const AddCardNavBtn = () => {
  return (
    <div className={styles.container}>
      <Link to="/addcard" className={styles.button}>
        Add new card
      </Link>
    </div>
  );
}

export default AddCardNavBtn;