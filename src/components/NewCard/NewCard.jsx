import React from "react";
import { useSelector } from "react-redux";
import styles from "../Card/card.module.css"; 
import chipImg from "../../assets/chip.png";

const NewCard = () => {
  // Hämta currentCard 
  const cardDetails = useSelector((state) => state.card.currentCard);

  const formattedExpiryDate = () => {
    const month = cardDetails.expiryMonth || "MM"; 
    const year = cardDetails.expiryYear ? cardDetails.expiryYear.toString().slice(-2) : "YY"; 
    return `${month}/${year}`;
  };

  const formatCardNumber = (number) => {
    // Om numret är undefined eller null, returnera en placeholder
    if (number == null) return "#### #### #### ####"; // Både null och undefined
  
    // Konvertera till sträng och använd regex för att gruppera siffrorna
    return number.toString().replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };
  

  const getCardClass = () => {
    switch (cardDetails.vendor) {
      case "Nordea":
        return styles.nordea;
      case "Mastercard":
        return styles.mastercard;
      case "Swedbank":
        return styles.swedbank;
      default:
        return 
    }
  };

  return (
    <div className={`${styles.Card} ${getCardClass()}`}>
      <div className={styles.topCard}>
      <img src={chipImg} alt="chip" />
        <h2>{cardDetails.vendor || "Vendor"}</h2>
      </div>
      <div className={styles.middleCard}>
        <p>{formatCardNumber(cardDetails.cardNumber) || "#### #### #### ####"}</p>
      </div>
      <div className={styles.bottomCard}>
      <p className="cardHolder" style={{fontSize:'0.8rem'}}>Card Holder:</p>
      </div>
      <div className={styles.bottomCard}>
        <p>{cardDetails.cardHolderName}</p>
        <p>CVC: {cardDetails.cardCVC}</p>
        <p>Exp: {formattedExpiryDate()} </p>
      </div>
    </div>
  );
};

export default NewCard;