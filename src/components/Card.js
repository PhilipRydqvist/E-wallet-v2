import styled from "styled-components";
import chipLight from "../assets/chip-light.svg"


function Card ({id, cardNumber, cardHolderName, cardValidDate, vendorColor, vendorIcon, creditCards, setCreditCards, setactiveCreditCard, setActiveCreditCard }) {
    
    function activeCardHandler() {
        // console.log(id);
        const nowActiveCard = creditCards.filter((filterdCard) => filterdCard.id === id)
        // console.log(creditCards);
        // console.log(nowActiveCard);
        setActiveCreditCard(nowActiveCard); 
        
    }
    // console.log(vendorIcon);
    
    return (
        <CardWrapper onClick={activeCardHandler} style={{ backgroundColor: vendorColor }}>
            <div className="chipicon-container">
              <img className="cardIdImage" src={ chipLight } />
              <img className="cardBankIcon" src={ vendorIcon } />
            </div>
            
            <div className="cardnumber-container">
              <h2 className="cardHolderNumber"> {cardNumber} </h2>
            </div>

          <div className="cardnamevaliddate-container">
            <div className="cardholdername-container">
              <h4 className="cardholder">CARDHOLDER NAME</h4>
              <h3 className="ecardholdernam">{cardHolderName}</h3>
            </div>

            <div className="vailddate-container">
              <h4 className="cardvalidthru">VALID THRU</h4>
              <h3 className="cardvaliddate">{cardValidDate}</h3>
            </div>
          </div>
        </CardWrapper>
    // rendera ut props 
    )
    
}

  const CardWrapper = styled.div`
  min-width: 350px;
  min-height: 180px;
  background-color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  font-family: sans-serif;
  color: #00000080;
  box-shadow: 0 5px 10px 0 #00000040, 0 15px 20px 0#00000020;
  transition: transform 200ms;
  cursor: pointer;
  font-family: 'PT Mono', monospace;

  .chipicon-container {
    display: flex; 
    justify-content: space-between;
    align-items: center;

  .cardIdImage {
    display: flex;
    width: 40px;
    height: 70px;

  .cardBankIcon {
    display: flex; 
    size: 50px;
   }
  }
}
  
.cardnumber-container {
   position: relative;
   text-align: center;
    top: -40px;
 
.cardHolderNumber {
  text-align: center;
  }
}
  
  .cardnamevaliddate-container{
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .cardholder {
    
  }

  .cardholdername-container {
  
  
  }

  .cardvalidthru{
  
  }

  .cardvaliddate {
  
  } `

export default Card;