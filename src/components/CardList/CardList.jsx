import React from 'react';
import { useSelector} from 'react-redux';
import Card from '../Card/Card'; 
import styles from './cardList.module.css';
import cardstyles from '../Card/card.module.css';

const CardList = () => {

  const cards = useSelector((state) => state.card.cards);

  // Filtrera fram det aktiva kortet
  const activeCard = cards.find((card) => card.isActive);

  // Filtrera fram inaktiva kort
  const inactiveCards = cards.filter((card) => !card.isActive);


  return (
    <div className={styles.cardList}>
      {activeCard && (
        <>
          <h2>Active Card</h2>
          <Card 
          className={cardstyles.Card}
            cardDetails={activeCard} 
          />
        </>
      )}
      {inactiveCards.length > 0 && (
        <>
          <h2>Inactive Cards</h2>
          <div className={styles.inactiveCardsList}>
            {inactiveCards.map((card, index) => (
              <Card 
                key={index} 
                cardDetails={card} 
                className = {`${styles.inactiveCard} ${cardstyles.Card}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;