import { useState } from 'react'
import {Form} from 'react-bootstrap'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
function Createuser() {


    const [id, setid]=useState()
    const [name, setname]=useState()
    const [email, setemail]=useState()
    const [mobno, setmobno]=useState()


    const nav= useNavigate()
    return ( 
        <div>
        <h2>Create page</h2>

        <Form  >
            <table align="center" >
                <tr>
                    <th>ID</th>
                    <td><input type='number' onChange={(e)=>{
                        setid(e.target.value)
                    }}></input></td>
                </tr>

                <tr>
                    <th>Name</th>
                    <td><input type='text' onChange={(e)=>{
                        setname(e.target.value)
                    }}></input></td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td><input type='email' onChange={(e)=>{
                        setemail(e.target.value)
                    }}></input></td>
                </tr>

                <tr>
                    <th>Mobno</th>
                    <td><input type='tel' onChange={(e)=>{
                        setmobno(e.target.value)
                    }}></input></td>
                </tr>

                <tr>
                    <td><input type='reset' value="Reset"></input></td>
                    <td><input type='button' value="Submit"
                    onClick={(e)=>{
                        e.preventDefault()

                        const emp = {
                            id:id,
                            ename:name,
                            email:email,
                            mobileno:mobno
                        }

                        axios.post('http://localhost:3000/employee',emp)
                            .then((res)=>{
                                console.log("connect")
                                console.log(res.data)
                                nav('/')
                            })
                            .catch((err)=>{
                                console.log(err)
                            })

                    }} />
                    </td>
                </tr>
            </table>
        </Form>
        </div>
     );
}

export default Createuser ;