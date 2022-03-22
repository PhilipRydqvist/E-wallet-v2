import { useRef } from "react";
import styled from "styled-components";
import { creditCardData } from '../data/mockData';
import { useNavigate } from "react-router-dom";


function CardForm({creditCards, setCreditCards}) {


    let navigate = useNavigate();

    function AddingCard (event) {
        event.preventDefault()
        const cardNumberValue = event.target.cardnumber.value;
        const cardNameValue = event.target.cardname.value;
        // console.log(cardValue);
        const cardValidThruValue = event.target.validthru.value;
        const cardCcvValue = event.target.ccv.value;
        const cardVendorValue = event.target.vendor.value;
        // console.log(cardNumberValue, cardNameValue, cardValidThruValue, cardCcvValue, cardVendorValue)
        const vendorFilter = creditCardData.filter((card) => card.vendorName === cardVendorValue);
        // console.log(vendorFilter);

        const newCreditCard = {
            id: idGenerator(),
            cardNumber: cardNumberValue,
            cardHolderName: cardNameValue,
            cardValidDate: cardValidThruValue,
            cardCcv: cardCcvValue,
            vendorColor: vendorFilter[0].vendorColor,
            vendorIcon: vendorFilter[0].vendorIcon
        }
    
        // console.log(newCreditCard);
        setCreditCards([...creditCards, newCreditCard]);
        localStorage.setItem("creditCards", JSON.stringify([...creditCards, newCreditCard]));
        localStorage.setItem("activeCard", JSON.stringify([newCreditCard]));
        navigate("/");
    }

    function idGenerator() {
        // Math.random (Math.floor * 10)
        // Math.random().toString(36).slice(2);
        return '_' + Math.random().toString(36).substr(2, 9);
        
    }
        // console.log(idGenerator());

    return (
        <div className="CardForm">
            <form action="submit" onSubmit={ AddingCard }>
            <section className="cardnumber">
            <label> Card number
                <input type="text" name="cardnumber" placeholder="cardnumber" minlength="16" maxlength="16" pattern="^[0-9]+$" required />
            </label>
            </section>

            <section className="cardname">
            <label> Card holder name
                <input type="text" name="cardname" placeholder="Firstname & Lastname" required />
            </label>
            </section>

            <section className="validCcvName">
                <label> Valid thru</label>
                <label>Ccv</label>
            </section>

            <section className="validCcvInput">
                <input type="month" name="validthru" placeholder="Valid Thru" required/>
                <input type="text" name="ccv" placeholder="Ccv" required/>

            </section>
            
            <section className="vendor">
                <label>
                    Vendor
                    {/* <input type="text" name="vendor" placeholder="Vendor" /> */}
                    <select name="vendor" id="Vendors" required>
                    <option value="Bitcoin Inc">Bitcoin Inc</option>
                    <option value="Ninja Bank">Ninja Bank</option>
                    <option value="Block Chain Inc">Block Chain Inc</option>
                    <option value="Evil Corp">Evil Corp</option>
                    </select>
                </label>
            </section>
        
             <button type="submit" value="submit" placeholder="ADD CARD">Add Card!</button>
            </form>
        </div>
    )
}

const cardformWrapper = styled.section `
/* width: 500px;
  height: 350px;
  position: absolute;

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    .card-number-container,
    .card-name-container,
    .valid-cvv-container,
    .vendor-select-container,
    .btn-container {
      margin-top: 1rem;
      min-width: 320px;
      p {
        font-size: 0.8rem;
        color: #5c5959;
      }
      .date-input {
        font-size: 0.7rem;
      }
      input,
      select {
        all: unset;
        border: 1px solid #b6b3b3;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        width: 80%;
        -moz-appearance: textfield;
      }
    }
    .valid-cvv-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cvv-container,
      .valid-container {
        input {
          width: 100px;
        }
      }
    }
    .btn-container {
      display: flex;
      justify-content: center;
      button {
        all: unset;
        color: #fff;
        background-color: #000;
        font-size: 1.2rem;
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        width: 80%;
        text-align: center;
        &:hover {
          background-color: #201e1e;
        }
      }
    }
  }
  .date-input {
    color: transparent;
  }
  .error {
    animation: blinker 1s linear infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
      color: red;
    }
  } */
`
export default CardForm;

//  function AddingCard() {
    //      const card = {
    //          cardnumber: document.getElementById("cardnumber").value,
    //          cardname: document.getElementById("cardname").value,
    //          validCcvName: document.getElementById("validCcvName").value,
             
    //          validCcvInput: document.getElementById("validCcvInput").value, 

        //  }
    //  }