import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import Cart from '../cart/cart';
import './playerlist.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'




const UserList = (props) => {
    // <Cart></Cart>
    
const {name,salary,image,club,id}=props.user
const handLer=props.handLer

    return (
        
        

           
           <div className="main col-3 d-flex  col-md-3 mt-5 mb-5  
           shadow p-3 mb-5 bg-white rounded">

 <div className=" playerDetail">
            
            <img src={image} alt=""/>
            <h2>ID:{id}</h2>
            <h2>Name:{name}</h2>
            <h4>Club Name:{club}</h4>
            <h4>Salary:${salary}</h4>
            
            <button className="btn btn-primary m-5" onClick={()=>handLer(props.user)}>
                 <FontAwesomeIcon icon={faFutbol} />Click Now</button>
            </div>

           </div>   
        
    );
};

export default UserList;