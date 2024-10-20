import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { activateCard, deleteCard, deactivateCard} from '../../Redux/CardSlice';
import CardForm from "../CardForm/CardForm";
import Card from "../Card/Card";

const EditCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const card = useSelector((state) =>
    state.card.cards.find((card) => card.cardNumber.toString() === id)
  );

  // Kontrollera om kortet är aktivt
  const isCardActive = card?.isActive;

  const handleActivateCard = () => {
    dispatch(activateCard(card.cardNumber));
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard(card.cardNumber));
    navigate('/');
  };

   const handleDeActivateCard = () => {
    dispatch(deactivateCard(card.cardNumber));
  };

  return (
    <div style= {{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
        <Card cardDetails={card} />
      {!isCardActive && (
        <> <div className="buttons" style={{display:'flex', gap:'1rem'}}>
          <button onClick={handleActivateCard}>Activate Card</button>
          <button onClick={handleDeleteCard}>Delete Card</button>
          </div>
          <CardForm formValues={card} isEditing={true} />
        </>
      )}
      {isCardActive && (<><p>This card is active and cannot be edited or deleted.</p> <button onClick={handleDeActivateCard}>Deactivate Card</button></>
      )}
    </div>
  );
};

export default EditCard;