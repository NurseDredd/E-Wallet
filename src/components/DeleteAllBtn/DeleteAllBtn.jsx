import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from '../../Redux/cardSlice';
import { useNavigate } from 'react-router-dom';
import styles from './DeleteAllBtn.module.css';

const DeleteAllBtn = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const navigate = useNavigate();

  const inactiveCards = cards.filter(card => !card.isActive);

  const handleDeleteInactiveCards = () => {
    inactiveCards.forEach(card => {
      dispatch(deleteCard(card.cardNumber)); 
    });
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Delete All Inactive Cards</h2>
      <p className={styles.warning}>
        This action will permanently delete all inactive cards. This cannot be undone.
      </p>
      <button 
        onClick={handleDeleteInactiveCards}
        className={styles.deleteButton}
        disabled={inactiveCards.length === 0}
      >
        Delete All Inactive Cards ({inactiveCards.length})
      </button>
    </div>
  );
};

export default DeleteAllBtn;