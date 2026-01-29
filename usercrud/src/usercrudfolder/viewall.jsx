import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
function Viewall() {
    const [emp,setemp]=useState([
         {
            "id": 101,
            "name": "Pratik",
            "email": "pratik@gmail.com",
            "mobno": 1234567,
        }
        
    ])

    const viewalldata=()=>{
        axios.get('http://localhost:3000/employee')
        .then((res)=>{
            console.log("connect")
            console.log(res.data)
            setemp(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        }
    
    useEffect(()=>{
        viewalldata()
    },[])

    return ( 
        <div>
        <h2>ViewAll page</h2>

        <Table>
            <thead>
                <tr>
                    <th>Emp ID</th>
                    <th>Emp name</th>
                    <th>Emp email</th>
                    <th>Emp mobno</th>
                </tr>
            </thead>
                {
                emp.map((e)=>(
                    <tbody>
                        <tr>
                        <td>{e.id}</td>
                        <td>{e.ename}</td>
                        <td>{e.email}</td>
                        <td>{e.mobileno}</td>
                 </tr>  
                 </tbody>            
                ))
            }          
        </Table>
        </div>
     );
    }

export default Viewall;
//   http://localhost:3000/employee