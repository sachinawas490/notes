import React from 'react'
import Header from './component/Header';
import LnadingPage from './component/LnadingPage';
import Registration from './component/Registration';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Notes from './component/Notes';
import Addnotes from './component/Addnotes';
import Edit from './component/Edit';
function App() {
  return (
    <>
     <BrowserRouter>
     
     <Routes>
      <Route path={'/'} element={<LnadingPage/>}></Route>
      <Route path={'/registration'} element={<Registration/>}></Route>
      
      <Route path='/notes' element={<Notes/>}></Route>
      <Route path='/addnotes' element={<Addnotes/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App