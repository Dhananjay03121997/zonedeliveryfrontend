import axios from 'axios';
import React from 'react';

export class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
getProducts(){
    axios.get('http://localhost:3001/getproducts').then(data=>{
        console.log(data);
        this.setState({
            list:data.data
        })
    })
}
render(){
    return (
        <div>

        </div>
    )
}
}

