// import { Link } from 'react-router-dom';
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import DeleteButton from "../components/DeleteButton";

function Home({creditCards, setCreditCards, activeCreditCard, setActiveCreditCard}) {
    console.log(activeCreditCard);
   
    let navigate = useNavigate(); 

    // <h1>detta är homesidan.</h1>
    return (
        
        <HomeWrapper> 
            <div className="headline-container">
            <Top headline="E-WALLET" />
            </div>

            <p className="header">ACTIVE CARD</p>

            <div className="activecard-container">
            { activeCreditCard.length >= 1 ? <DeleteButton creditCards={ creditCards } setCreditCards={ setCreditCards } activeCreditCard= { activeCreditCard } setActiveCreditCard= { setActiveCreditCard }/> : null }
            {activeCreditCard.map((cards) => (
              <Card key={cards.id}
              {...cards}creditCards={ creditCards } setCreditCards={ setCreditCards } activeCreditCard= { activeCreditCard } setActiveCreditCard= { setActiveCreditCard }
              // spread operator ...
              />  
            ))}
            </div>
            <div className="cardstack-container">
            <CardStack creditCards={ creditCards } setCreditCards={ setCreditCards } activeCreditCard= { activeCreditCard } setActiveCreditCard= { setActiveCreditCard }/>
              {/* propdrillar */}
            </div>
            <button className="addCardButton" onClick={() => navigate("/add")}>ADD A NEW CARD</button>
        </HomeWrapper>
        

        
    );
}

const HomeWrapper = styled.section`
    min-height: 80vh;
  min-width: 100%; 
  background-color: white;
   display: flex; 
   justify-content: center; 
  align-items: center;
  flex-direction: column; 

/* .headline-container {
  display: flex; 
  position: relative; 
  flex-direction: column;
  align-items: center;
}
  
.header {
  display: flex;
  position: relative;
  flex-direction: column;
}

.activecard-container {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
}

.cardstack-container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.addCardButton {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  }  */
`

export default Home;

//  <section>
        //  <button onClick= { Link to="add" }></button>
        //  </section>
        
        //  <button
        //       <Link to="/add">AddCard</Link>
        //  />