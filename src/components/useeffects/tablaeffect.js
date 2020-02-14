import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './tablaeffect.scss'





const Tablaeffect = props =>{

    const[maindata,setMaindata] = useState([]);
    const getFromApi = async () =>{
        try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
             setMaindata(res.data);
        }catch(err) {
            console.log(err);
        }
      
    }

    useEffect(()=>{
        getFromApi();
        console.log("Se ejecuta useEffect");
    },[]);


    return(
        <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        
      
        { maindata.map(item=>{
          return(
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          </tr>
          )
           })
       }
           
      </table>
    );
    }


export default Tablaeffect;