import { useSelector} from 'react-redux';
import Card from '../Card/Card'; 
import styles from './cardList.module.css';

const CardList = () => {

  const cards = useSelector((state) => state.card.cards);

  // Filtrera fram det aktiva kortet
  const activeCard = cards.find((card) => card.isActive);

  // Filtrera fram inaktiva kort
  const inactiveCards = cards.filter((card) => !card.isActive);

  return (
    <div className={styles.cardList}>
      {activeCard && (
        <div className={styles.section}>
          <h2>Active Card</h2>
          <div className={styles.activeCardSection}>
            <Card cardDetails={activeCard} />
          </div>
        </div>
      )}
      {inactiveCards.length > 0 && (
        <div className={styles.section}>
          <h2>Inactive Cards</h2>
          <div className={styles.inactiveCardsSection}>
            <div className={styles.inactiveCardsList}>
              {inactiveCards.map((card, index) => (
                <Card 
                  key={index} 
                  cardDetails={card} 
                  className={styles.inactiveCard}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;