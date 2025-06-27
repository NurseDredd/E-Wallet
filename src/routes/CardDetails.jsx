import EditCard from '../components/EditCard/EditCard';
import styles from './cardDetails.module.css';

const CardDetails = () => {
  return (
    <div className={styles.cardDetailsContainer}>
      <h1 className={styles.title}>Edit Card</h1>
      <div className={styles.content}>
        <EditCard/>
      </div>
    </div>
  )
}

export default CardDetails