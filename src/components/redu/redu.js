import React, {useState, useReducer} from 'react';
import './redu.scss';

const Redu = () => {
    const reducer = (state, action) => {
        switch(action.type) {
          case "user":
            return {...state, user: action.payload};
          case "email":
            return {...state, email: action.payload};
          case "tel":
              return {...state, tel: action.payload};
          default:
            return state;
        }
      };

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [state, dispatch] = useReducer(reducer, {user, email, tel});
    const changeUser = () => dispatch({type:"user",payload: user});
    const changeEmail = () => dispatch({type:"email",payload: email});
    const changeTel = () => dispatch({type:"tel",payload: tel});

    return (
   <div>
<input type="text" placeholder="Username" onChange={e=>setUser(e.target.value)}/>
<button onClick={changeUser} >Registrar User</button>
<input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
<button onClick={changeEmail}>Registrar Email</button>
<input type="text" placeholder="Tel" onChange={e=>setTel(e.target.value)}/>
<button onClick={changeTel}>Registrar Tel</button>

<h1>Registrado:</h1>
<p>Username: {state.user}</p>
<p>Email: {state.email} </p>
<p>Tel: {state.tel}</p>
   </div>
    );
};

export default Redu;