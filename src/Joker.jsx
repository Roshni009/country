import { useEffect, useState } from "react";

export default function Joker() {

    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
      let res = await fetch(URL);
      let jsonRes = await res.json();
      console.log(jsonRes);
      setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    };

    useEffect(() => {
           async function getFirstJoke() {
             let response = await fetch(URL);
             let jsonResponse = await response.json();
             console.log(jsonResponse);
             setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
           }
            getFirstJoke();
       }, []);
    

    return ( 
    <div>
          <h3>Joker!</h3> 
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2> 
          <button onClick={getNewJoke}>Get Joke</button>
    </div>
 );
}