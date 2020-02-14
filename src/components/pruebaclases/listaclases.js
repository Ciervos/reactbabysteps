import React from 'react';
import './listaclases.scss';
import axios from 'axios';

export default class Listaclases extends React.Component{
    state = {
        maindata: [ ]
    }

    render() {
        const { maindata } = this.state; 

        return(
<ul>
    {
    maindata.map(item=>{
        return <li>{item.title}</li>
    })
    }
</ul>
        ); 
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            const maindata = res.data;
            this.setState({ maindata });
        })
        .catch(err => console.log(err));
    }
}
