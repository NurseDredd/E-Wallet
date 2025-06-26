import AddCardNavBtn from '../components/AddCardNavBtn/AddCardNavBtn'
import CardList from '../components/CardList/CardList';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <CardList/>
      <AddCardNavBtn/>
    </div>
  )
}

export default Home