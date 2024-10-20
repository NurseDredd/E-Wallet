import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./card.module.css";
import chipImg from "../../assets/chip.png";

const Card = ({cardDetails, className}) => {
 
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/card/${cardDetails.cardNumber}`);
  };

  
  const cardClass = () => {
    switch (cardDetails.vendor) {
      case "Nordea":
        return styles.nordea;
      case "Mastercard":
        return styles.mastercard;
      case "Swedbank":
        return styles.swedbank;
      default:
        return "";
    }
  };

  // Formatera utgångsdatum 
  const formattedExpiryDate = () => {
    const month = cardDetails.expiryMonth ? String(cardDetails.expiryMonth).padStart(2, '0') : 'MM'; // Lägg till ledande nolla om månad < 10
    const year = cardDetails.expiryYear ? cardDetails.expiryYear.toString().slice(-2) : 'YY'; 
    return `${month}/${year}`; // Formatera som MM/YY
  };

  const formatCardNumber = (number) => {
    // Om numret är undefined eller null, returnera en placeholder
    if (number == null) return "#### #### #### ####"; // Både null och undefined
  
    // Konvertera till sträng och använd regex för att gruppera siffrorna
    return number.toString().replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };
  
  return (
    <div className={`${styles.Card} ${cardClass()} ${cardDetails.isActive ? styles.activeCard : ""} ${className}`} onClick={handleCardClick}>
      <div className={styles.topCard}>
      <img src={chipImg} alt="chip" />
        <h2>{cardDetails.vendor || "Vendor"}</h2> 
      </div>
      <div className={styles.middleCard}>
        <p>{formatCardNumber(cardDetails.cardNumber) || "#### #### #### ####"}</p>
        <p className="cardHolder" style={{fontSize:'0.8rem'}}>Card Holder:</p>
      </div>
      <div className={styles.bottomCard}>
        <p>{cardDetails.cardHolderName}</p>
        <p>Exp: {formattedExpiryDate()} </p>
      </div>
    </div>
  );
};

export default Card;