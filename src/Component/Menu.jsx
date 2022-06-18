// import React ,{useReducer}from 'react'

// const initialData=10;

// const reducer=(state,action)=>{
    
//     if(action.type==="inc"){
//     state=state+1}
//     if(action.type==="dec"){
//         state=state-1;
//     }
//     return state;

//  };


// const Menu = () => {
   
     
    

   
//      const [state, dispatch] = useReducer(reducer, initialData);




//   return (
   
//     <>

//     <p>
//         {state}

//     </p>
//     <button onClick={()=>dispatch({type:"inc"})}>inc</button> 
//      <button onClick={()=>dispatch({type:"dec"})}>dec</button> 
//     {/* <button onClick={() => dispatch("add")}>
//         add
//       </button>
//       <button onClick={() => dispatch("subtract")}>
//         subtract
//       </button> */}
   
//     </>
//   )
// }

// export default Menu;