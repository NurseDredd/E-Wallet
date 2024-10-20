import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from '../../Redux/CardSlice';
import { useNavigate } from 'react-router-dom';

const DeleteAllBtn = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const navigate = useNavigate();

  const inactiveCards = cards.filter(card => !card.isActive);

  const handleDeleteInactiveCards = () => {
    inactiveCards.forEach(card => {
      dispatch(deleteCard(card.cardNumber)); 

      navigate('/');
    });
  };

  return (
    <div>
      <button onClick={handleDeleteInactiveCards}>
        Delete All Inactive Cards
      </button>
    </div>
  );
};

export default DeleteAllBtn;