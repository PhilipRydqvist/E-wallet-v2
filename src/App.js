//state
import {useState, useEffect} from "react";

//helper
import { loadCreditCards } from "./utils/helper";

//routes
import { Routes, Route } from "react-router-dom"; 

//data
 import { creditCardData } from './data/mockData';


//importerat objektet från mockdata. 

// import Top from "./components/Top";

//views
import Home from "./view/Home";
import AddCard from './view/AddCard';


// const [Cards, setCards] = useState{[]}; 


function App() {
 
const [creditCards, setCreditCards] = useState(loadCreditCards(creditCardData, "creditCards"))
// const [creditCards, setCreditCards] = useState(loadCreditCards(creditCardData))
// console.log(activeCreditCard);

//behövs ej
// const [creditCardsEmpty, setCreditCardsEmpty] = useState(creditCardDataEmpty)
// console.log(creditCardsEmpty)

const [activeCreditCard, setActiveCreditCard] = useState(loadCreditCards ([creditCardData[0]], "activeCard"))
 console.log(activeCreditCard);

  return (
    <div className="App"> 
    
      <header>
      </header>
      
<Routes>
  <Route path="/" element= { <Home creditCards={ creditCards } setCreditCards={ setCreditCards } activeCreditCard = { activeCreditCard } setActiveCreditCard = { setActiveCreditCard } /> } />
  <Route path="/add" element = { <AddCard creditCards={ creditCards } setCreditCards={ setCreditCards }/> } />
</Routes>

    </div>
  );
}

export default App;

//lagt card datan i separat fil istället.