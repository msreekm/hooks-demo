import React,{useState,useContext} from 'react';

import './App.css';
import Button from './Button';
import Greeting from './Greeting';
import LoginUseReducer  from './Form';

// export const NumberContext = React.createContext();
// It returns an object with 2 values: { Provider, Consumer }

function App() {

  const [name, setName] = useState('Roofstock!');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Hooks
        </p>
        
        <Button/>

        {/* <button onClick={()=>{setName('IndieComm')  }}>Change Name</button>
        <Greeting name={name} /> */}

        {/* <LoginUseReducer /> */}

        {/* <NumberContext.Provider value={2019}>
          <div>
            <Display />
          </div>
        </NumberContext.Provider> */}

      </header>
    </div>
  );
}

export default App;

// function Display() {
//   // Use the Consumer to grab the value from context
//   // Notice this component didn't get any props!
//   return (
//     <NumberContext.Consumer>
//       {value => <div>The answer is {value}.</div>}
//     </NumberContext.Consumer>
//   );
// }

// function Display() {
//   const value = useContext(NumberContext);
//   return <div>The answer is {value}.</div>;
// }