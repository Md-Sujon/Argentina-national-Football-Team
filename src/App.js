import logo from './logo.svg';
import './App.css';
import fakeData from './data/data.json'
import React ,{useEffect, useState} from 'react';
import UserList from './component/playerlist/playerlist';
import Cart from './component/cart/cart';

function App() {
  const [data,setData]=useState([])
  const [count,setCount]=useState([])

  useEffect(()=>{
         setData(fakeData)
         
  },[])

  const handLer=(user)=>{
  const newCount=[...count,user];
  setCount(newCount)
}
  
  return (
    <div className="App">
       <h1 className="title  ">Argentina national Football 
              Team</h1>
      <Cart count={count} data={data}></Cart>  
  {
    data.map(user=><UserList user={user} Cart={user} handLer={handLer}></UserList>)
  }
  
    </div>
  );
}

export default App;
