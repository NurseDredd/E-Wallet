import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: "card",
  initialState: {
    currentCard: {  
      cardNumber: "",
      cardHolderName: "",
      cardCVC: "",
      vendor: "",
      expiryMonth:"",
      expiryYear: "",
      isActive: false,
    },
    cards: [{
      cardNumber: 1876726152467281,
      cardHolderName:"Elise Philipsson",
      cardCVC: 187,
      vendor: "Nordea",
      expiryMonth:11,
      expiryYear:25,
      isActive: false,
    }]  
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      console.log(current(state))
    },

    // Uppdatera det aktuella kortets detaljer i realtid
    setCardDetails: (state, action) => {
      state.currentCard = {
        cardNumber: action.payload.cardNumber,
        cardHolderName: action.payload.cardHolderName,
        cardCVC: action.payload.cardCVC,
        vendor: action.payload.vendor,
        expiryMonth: action.payload.expiryMonth,
        expiryYear: action.payload.expiryYear,
        isActive: false 
      };
    },

    // Återställ aktuella kortdetaljer 
    resetCardDetails: (state) => {
      state.currentCard = {
        cardNumber: "",
        cardHolderName: "",
        cardCVC: "",
        vendor: "",
        expiryMonth: "",
        expiryYear: "",
        isActive: false
      };
    },
    activateCard: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.cardNumber === action.payload) {
          return { ...card, isActive: true };
        }
        return { ...card, isActive: false };
      });
    },
    deactivateCard: (state, action) => {
      state.cards = state.cards.map((card) => {
        if(card.cardNumber === action.payload) {
          return {...card, isActive: false};
        }
        return card;
      });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.cardNumber !== action.payload);
      },
      
  updateCard: (state, action) => {
    const index = state.cards.findIndex(card => card.cardNumber === action.payload.cardNumber);
    if (index !== -1) {
      state.cards[index] = action.payload; 
    }
  },
},
});

export const { addCard, setCardDetails, resetCardDetails, activateCard, deleteCard, updateCard, deactivateCard } = cardSlice.actions;
export default cardSlice.reducer;