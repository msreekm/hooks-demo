import React,{useRef} from 'react';

function TextInput(){
   //creating the ref by passing initial value null
  const nameRef = useRef(null);
  //this.myRef = React.createRef();

  function handleFocus(){
      //current is pointing to input element when component is mounts to dom
      nameRef.current.click
  }
  return(
      <div>
          <input ref={nameRef} placeholder="name" />
          <button onClick={handleFocus}>Focus</button>
      </div>
    )

}