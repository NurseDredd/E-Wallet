import React from 'react'
import NewCard from '../components/NewCard/NewCard'
import CardForm from '../components/CardForm/CardForm'

const AddCard = () => {
  return (
    <div style= {{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}><h1>Add New Card</h1>
    <NewCard/>
    <CardForm formValues={{ cardNumber: '', cardHolderName: '', cardCVC: '', vendor: '' }} isEditing={false} />
    </div>
  )
}

export default AddCard