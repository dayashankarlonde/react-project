import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
import Updateuser from './usercrudfolder/Update'
import Deleteuser from './usercrudfolder/Delete'
import Viewall from './usercrudfolder/viewall'
import Createuser from './usercrudfolder/Create'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Mainapp page</h1>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/view">Viewall user</Nav.Link>
            <Nav.Link href="/create">Create user</Nav.Link>
            <Nav.Link href="/update">Update user</Nav.Link>
            <Nav.Link href="/delete">Delete user</Nav.Link>

          </Nav>
        </Container>
      </Navbar>


    <BrowserRouter>
    <Routes>
      <Route path='/view' element={<Viewall></Viewall>}></Route>
      <Route path='/create' element={<Createuser></Createuser>}></Route>
      <Route path='/update' element={<Updateuser></Updateuser>}></Route>
      <Route path='/delete' element={<Deleteuser></Deleteuser>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
//  <Browserroute>
//      <Routes>
//           <Route ></Route>

//       </Routes>
//       </Browserroute>

// npm install -g json-server@0.17.4   this command is used to run json server

// json-server --watch db.json --port 3001