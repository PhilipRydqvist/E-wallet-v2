import React from 'react'

import styled from "styled-components"
import Card from './Card';

function DeleteButton({ creditCards, setCreditCards, activeCreditCard, setActiveCreditCard }) {
  
  function removeCard () {
    //   console.log(creditCards)
    const id=activeCreditCard[0].id;
    // console.log(id)
    const removeActiveCard = activeCreditCard.filter((card) => card.id !== id);
    // console.log(removeActiveCard);
    const removeStackCard = creditCards.filter((card) => card.id !== id);
    // console.log(removeStackCard);
    setActiveCreditCard(removeActiveCard);
    setCreditCards(removeStackCard);
    

    localStorage.setItem("creditCards", JSON.stringify(removeStackCard))
    /* console.log(removeStackCard[0]) */
    if(creditCards.length > 1 ){
        localStorage.setItem("activeCard", JSON.stringify([removeStackCard[0]]))
    } else {
        localStorage.setItem("activeCard", JSON.stringify(removeStackCard))
    }
  } 

    return (
    <DeleteButtonWrapper onClick= { removeCard }>X</DeleteButtonWrapper>
    
  )
}
//för att ta bort creditcard och activecard med knappen 

export default DeleteButton

const DeleteButtonWrapper = styled.button`
    

`