import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winningCondition(ticket);

    let buyTicket = () => {
           setTicket(genTicket(n));
    };

    return(
       <div>
        <h1>Lottery Game!</h1>
         <Ticket ticket={ticket} />
         <br />
         <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "congratulations, you won!"}</h3>
     
       </div>
    );
}