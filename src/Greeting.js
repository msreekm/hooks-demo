import React, { useState,useEffect} from "react";
import { Socket } from "dgram";

function Greeting({ name }) {
  const [counter, setCounter] = useState(0);
  
//   counter = 15 ;

  useEffect(() => {
    //api 
    document.title = 'Welcome to ' + name +counter ;
    console.log('useEffect..');
    return () => {
        console.log('useEffect cleanup..');
    }
  },[name]);



  return (
    <h1 className="Greeting">
      Welcome to , {name} {counter}  
      <button onClick={() => setCounter(counter + 1)}>
        Increment 
      </button>
    </h1>
  );
}

export default Greeting;