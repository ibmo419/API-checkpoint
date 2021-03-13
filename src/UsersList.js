import axios from 'axios'
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'


function UserList(){

const [data, setData] = useState([]);
const [error, setError] = useState(null); 
useEffect(() => {
    function getData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setData(res.data))
        .catch(err=>setError(err));
    }
    getData();
}, [])
console.log(data)
    return(
        <div>
  <Table striped bordered hover >
  <thead>
    <tr>
      <th>id</th>
      <th>First Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>E-mail</th>
      <th>Adress</th>
    </tr>
  </thead>
  <tbody>
      {data.map((el)=>{
          return(
            <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.phone}</td>
            <td>{el.email}</td>
            <td>{el.address.city}</td>
          </tr>
          )
      })}
  </tbody>
</Table>
        </div>
    )
}
export default UserList