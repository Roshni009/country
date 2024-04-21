import './App.css';
import LudoBoard  from './LudoBoard';
import TodoList from './TodoList'; 
import Form from './Form.jsx';
import CommentForm from './CommentForm.jsx';
import Counter from './Counter.jsx';
import Joker from './Joker.jsx';
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';




function App() {
 
  let winningCondition = (ticket) => {
    return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    // return ticket[0] === 0;
  };

  return (
    <>
     <Joker/>
     <Lottery n={3} winningCondition={winningCondition}/>
     <TodoList />
    </>
  );
}

export default App;
