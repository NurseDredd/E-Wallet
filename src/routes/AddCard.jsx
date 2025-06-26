import NewCard from '../components/NewCard/NewCard'
import CardForm from '../components/CardForm/CardForm'
import styles from './addCard.module.css'

const AddCard = () => {
  return (
    <div className={styles.addCardContainer}>
      <h1 className={styles.title}>Add New Card</h1>
      <div className={styles.content}>
        <NewCard/>
        <CardForm formValues={{ cardNumber: '', cardHolderName: '', cardCVC: '', vendor: '' }} isEditing={false} />
      </div>
    </div>
  )
}

export default AddCard