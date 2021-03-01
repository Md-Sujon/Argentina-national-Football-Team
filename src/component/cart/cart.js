import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './cart.css'



const Cart = (props) => {
    // console.log(props);
    const count=props.count
    // const {name,id}=props.data
    // {
    //     let result = data.filter(word => word > name,id);
    // }
    let totalSalary=0;
    for (let i = 0; i < count.length; i++) {
        const user = count[i];
        totalSalary=totalSalary+user.salary;
        
        }

        let PlayerId=" ";
    for (let i = 0; i < count.length; i++) {
        const user = count[i];
        PlayerId=PlayerId+" _"+user.id+" _"+user.name+"_ Club name:  "+user.club+"_Salary:  "+user.salary;
        }
    
        console.log(PlayerId);
    return (
        <div className="cart col-6  ">
          
            <h4><small>Selected plyer:{count.length}</small></h4>
            <h1>TotalSalary:${totalSalary}</h1>
           
           <div className="cart_design">
           <h3>Player Name And Id:{PlayerId}</h3>
           {/* <img src={Number(PlayerId)} alt=""/> */}
           
           </div>
           
        </div>
    );
};

export default Cart;