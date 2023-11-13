import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  let [users,setUsers]= useState(null);
  useEffect(()=>{
    const fetchUsers = async()=> {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      
      setUsers(data);
      console.log("users",users);
    }
    // POST 
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        id: 11,
        name: 'hello',
        phone: '9382336367',
        email: 'hello@gmail.com',
        
      }),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log("new user created",json));
    // UPDATE
    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        name: 'hey',
      }),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log("updated user",json));
    // DELETE
    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((json) => console.log("deleted user"));

    fetchUsers()
  },[])

  if(users){
  return (
    <div>
      <div className='nav'>Contact Book</div>
      <div className='flex-container'>
      {users.map((item)=>
      <div className='someDiv' key={`user-${item.id}`}>

        Name   : {item.name}<br/>
        Email  : {item.email}<br/>
        Phone  : {item.phone}<br/>
        Company : {item.company.name}
      </div>)}
      </div>
      
    </div>
  );
  }else{
    return <></>;
  }
}

export default App;
