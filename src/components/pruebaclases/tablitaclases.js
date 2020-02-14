import React from 'react';
import axios from 'axios';

export default class Tablaclases extends React.Component{
    state = {
        maindata: [ ]
    }

    render() {
        const { maindata } = this.state; 

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
/* {
    maindata.map(item=>{
        return <li>{item.title}</li>
    })
    } */
        ); 
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const maindata = res.data;
            this.setState({ maindata });
        })
        .catch(err => console.log(err));
    }
}