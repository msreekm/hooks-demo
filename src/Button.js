import React, { Component ,useState} from "react";
import './App.css';
import { setTimeout } from "core-js";


export default class Button extends Component {

  state = { buttonText: "Buy this Listing" , mesagea:"foo"};
  
  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Congratulations, Listing is yours!" };
    });
  };
  
  render() {
    const { buttonText } = this.state;
    return <button className="Button" onClick={this.handleClick}>{buttonText}</button>;
  }

}
// export default function Button() {

//   const [buttonText, setButtonText] = useState("Buy this Listing");   //array destructuring!
// // const {a,b} = foo;
// //   var listingButton = useState("Buy this Listing"); // Returns a pair
// //   var buttonText = listingButton[0]; // First item in a pair
// //   var setButtonText = listingButton[1]; // Second item in a pair

//   function handleClick() {
//     return setButtonText("Congratulations, Listing is yours!");
//   }

//   return (
//     <button className="Button" onClick={handleClick}>
//       {buttonText}
//     </button>
//   );
// }

// const Button = ()=> {

//     const [buttonText, setButtonText] = useState("Buy this Listing");

//     const handleClick = () => {
//         return setButtonText("Congratulations, Listing is yours!");
//     }
//     return (
//       <button className="Button" onClick={handleClick}>
//         {buttonText}
//       </button>
//     );
//   }

// export default Button;

// const Button = ()=>{

//     const [buttonText, setButtonText] = useState("Buy this Listing");
  
//     return (
//       <button className="Button" onClick={() => setButtonText("Congratulations, Listing is yours!")}>
//         {buttonText}
//       </button>
//     );
//   }

// export default Button;

// multiple states
// const Button = ()=>{

//     const [buttonText, setButtonText] = useState("Buy this Listing");
//     const [isLoading, setIsLoading] = useState(false);   

//     const handleClick = () => {
//         setIsLoading(true);

//         //fake an api call!
//         setTimeout(()=>{
//             setIsLoading(false);
//             setButtonText("Congratulations, Listing is yours!");
//         }, 2000);
//     }

//     return (
//         <React.Fragment>
//             <button className="Button" onClick={handleClick}>
//             {isLoading ? 'Loading...' :  buttonText}
//             </button>

//       </React.Fragment>
//     );
//   }

// export default Button;


// careful with object in states
// const Button = ()=> {

//     // const [buttonText, setButtonText] = useState("Buy this Listing");
//     // const [isLoading, setIsLoading] = useState(false);    
//     const [state, setState] = useState({ buttonText: 'Buy Listing', isLoading: false });
    
//     console.log(state);
    
//     const handleClick = () => {
//         setState({...state, isLoading:true});

//         //fake an api call!
//         setTimeout(()=>{
//             setState({...state, isLoading:false});
//             setState({...state, buttonText : "Congratulations, Listing is yours!"});
//         }, 2000);
//     }

//     return (
//         <React.Fragment>
//             <button className="Button" onClick={handleClick}>
//             {state.isLoading ? 'Loading...' :  state.buttonText}
//             </button>

//       </React.Fragment>
//     );
//   }

// export default Button;