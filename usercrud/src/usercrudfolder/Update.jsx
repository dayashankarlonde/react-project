import {Form} from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';


function Updateuser() {

    const [id,setid]=useState()
    const [name, setname]=useState()
    const [email, setemail]=useState()
    const [mobno, setmobno]=useState()
    return ( 
        <div>
        <h2>Updateuser page</h2>
        <Form>
            <table border={1} align='center'>
                <tr>
                    <th>Id :</th>
                    <td><input type='number' onChange={(e)=>{setid(e.target.value)}}></input></td>
                </tr>

                <tr>
                    <th></th>
                    <td><input type='button' value='View'
                    onClick={(e)=>{
                        e.preventDefault()
                        axios.get(" http://localhost:3000/employee/"+id)
                        .then((res)=>{
                            console.log("success")
                            setname(res.data.ename)
                            setemail(res.data.email)
                            setmobno(res.data.mobileno)
                    })
                        .catch((err)=>{
                            console.log(err)
                        })
                        
                    }}></input></td>
                </tr>

                <tr>
                    <th>Name :</th>
                    <td><input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}></input></td>
                </tr>

                <tr>
                    <th>Email :</th>
                    <td><input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input></td>
                </tr>

                <tr>
                    <th>Mobile No :</th>
                    <td><input type='tel' value={mobno} onChange={(e)=>{setmobno(e.target.value)}}></input></td>
                </tr>

                <tr>
                    <td><input type='reset' Value='Reset'></input></td>
                    <td><input type='button' value='update'></input></td>
                </tr>
            </table>
        </Form>
        </div>
     );
}

export default Updateuser;