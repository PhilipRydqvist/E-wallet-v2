import React from 'react';
import Card from './Card';
import styled from "styled-components";

function CardStack({creditCards, setCreditCards, activeCreditCard, setActiveCreditCard}) {
  //ta emot propsen, propdrilling
    const activeCardIdArray = activeCreditCard.map ((card) => {
        return card.id
    });
    // return card.id.toString()
    // console.log(activeCardId);
    const activeCardId = activeCardIdArray.toString();
    // console.log(activeCardId);

    const filteredCardStack = (id, cardItems) => {
        return cardItems.filter((card) => card.id !== id )
    }

    const filteredCards = filteredCardStack(activeCardId, creditCards);
    // console.log(filteredCards);
    
    return (
    <cardStackWrapper>
    {filteredCards.map((cards) => 
    <Card key={cards.id}
    {...cards} creditCards={ creditCards } setCreditCards ={ setCreditCards } activeCreditCard= { activeCreditCard } setActiveCreditCard= { setActiveCreditCard }
    />
    )}   
    </cardStackWrapper>
  )
}
//mappa ut propsen

export default CardStack

 const cardStackWrapper = styled.div`
    position: absoulute;
    top: 600px;

` 