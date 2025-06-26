import { useState, useEffect } from 'react';
import styles from './cardform.module.css';
import AddBtn from '../AddBtn/AddBtn';
import { setCardDetails, addCard, resetCardDetails, updateCard } from '../../Redux/CardSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CardForm = ({ formValues, isEditing }) => {
    const dispatch = useDispatch();

    const cards = useSelector((state) => state.card.cards);

    CardForm.propTypes = {
        formValues: PropTypes.shape({
            cardNumber: PropTypes.string,
            cardHolderName: PropTypes.string,
            cardCVC: PropTypes.string,
            vendor: PropTypes.string,
            expiryMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            expiryYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        isEditing: PropTypes.bool
    };

    // Lokalt tillstånd för formulärvärdena
    const [localFormValues, setLocalFormValues] = useState({
        cardNumber: '',
        cardHolderName: '',
        cardCVC: '',
        vendor: '',
        expiryMonth: '',
        expiryYear: ''
    });

    // Lokalt tillstånd för felmeddelanden
    const [errors, setErrors] = useState({
        cardNumber: '',
        cardHolderName: '',
    });

    // Uppdatera lokala värden när formValues ändras (t.ex. när vi redigerar)
    useEffect(() => {
        if (formValues) {
            setLocalFormValues(formValues);
        }
    }, [formValues]);

    // Validering av formulärfält
    const validate = () => {
        let valid = true;
        const newErrors = { cardNumber: '', cardHolderName: '', cardCVC:'', expiryDate: '' };

        // Validera kortnummer (måste vara exakt 16 siffror)
        if (!/^\d{16}$/.test(localFormValues.cardNumber)) {
            newErrors.cardNumber = 'Card number must be 16 digits.';
            valid = false;
        }

        // Validera kortinnehavarens namn (får inte innehålla siffror)
        if (/\d/.test(localFormValues.cardHolderName)) {
            newErrors.cardHolderName = 'Name cannot contain numbers.';
            valid = false;
        }

        if (!/^\d{3}$/.test(localFormValues.cardCVC)) {
            newErrors.cardCVC = 'CVC must be 3 digits.';
            valid = false;
        }

        //Validera datum

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth()+1;
        const expiryYear = parseInt(localFormValues.expiryYear);
        const expiryMonth = parseInt(localFormValues.expiryMonth);

        if(expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
            newErrors.expiryDate = 'The expiry date has already passed.';
            valid = false;
        }


        setErrors(newErrors);
        return valid;
    };

    // Hantera förändringar i input-fälten
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setLocalFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    
        // Uppdatera Redux i realtid medan användaren skriver
        dispatch(setCardDetails({
            ...localFormValues,
            [name]: value,
        }));
    };

    // Hantera formulärinlämning
    const handleSubmit = (e) => {
        e.preventDefault();

        if(cards.length >= 4 && !isEditing) {
            alert("You can't have more than 4 cards");
            return;
        }

        // Kontrollera om validering är godkänd
        if (!validate()) {
            return; // Avbryt om valideringen misslyckas
        }

        if (isEditing) {
            // Uppdatera kortet i Redux
            dispatch(updateCard(localFormValues));
        } else {
            // Lägg till nytt kort till Redux-statet (cards-arrayen)
            dispatch(addCard(localFormValues));
        }

        // Nollställ formuläret efter inlämning
        setLocalFormValues({
            cardNumber: '',
            cardHolderName: '',
            cardCVC: '',
            vendor: '',
            expiryMonth: '',
            expiryYear: ''
        });

        dispatch(resetCardDetails());

        console.log(isEditing ? "Card updated:" : "New card added:", localFormValues);
    };

    return (
    <div className={styles.cardForm}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder='xxxx xxxx xxxx xxxx'
            value={localFormValues.cardNumber}
            onChange={handleInputChange}
            maxLength="16"
            required
        />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}

        <label htmlFor="cardHolderName">Card Holder Name</label>
        <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            placeholder='Enter name'
            value={localFormValues.cardHolderName}
            onChange={handleInputChange}
            required
        />
        {errors.cardHolderName && <p>{errors.cardHolderName}</p>}
        <label htmlFor="vendor">Vendor</label>
        <select
            name="vendor"
            id="vendor"
            value={localFormValues.vendor}
            onChange={handleInputChange}
            required
        >
            <option value="" disabled hidden>Choose a vendor</option>
            <option value="Nordea">Nordea</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Swedbank">Swedbank</option>
        </select>

        <div className={styles.dateCvcContainer}>
        <div className={styles.expiryDateContainer}>
    <label htmlFor="expiryMonth">Expiry Month</label>
    <input
        type="number"
        id="expiryMonth"
        name="expiryMonth"
        placeholder='MM'
        value={localFormValues.expiryMonth}
        onChange={handleInputChange}
        required
        max="12" 
        min="1"
    />
    <label htmlFor="expiryYear">Expiry Year</label>
    <input
        type="number"
        id="expiryYear"
        name="expiryYear"
        placeholder='YYYY'
        value={localFormValues.expiryYear}
        onChange={handleInputChange}
        required
        min={new Date().getFullYear()}
    />
    {errors.expiryDate && <p>{errors.expiryDate}</p>}
        </div>

            <div className={styles.cvcContainer}>
                <label htmlFor="cardCVC">CVC</label>
                <input
                    type="text"
                    id="cardCVC"
                    name="cardCVC"
                    placeholder='Enter CVC'
                    value={localFormValues.cardCVC}
                    onChange={handleInputChange}
                    maxLength="3"
                    required
                />
                {errors.cardCVC && <p>{errors.cardCVC}</p>}
            </div>
        </div>

        <AddBtn type="submit">
            {isEditing ? "Save Changes" : "Add Card"}
        </AddBtn>
    </form>
</div>
    );
};

export default CardForm;