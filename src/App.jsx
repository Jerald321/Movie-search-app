import React ,{useState, createContext, useSyncExternalStore} from 'react'

import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Nextpage from './components/Nextpage'

export const titlevalue =createContext();

function App({}) {
  const [Title, setTitle] = useState("all");
  const [page,setPage] =useState(1);
  const [perpage,setPerPage] =useState(8);
 
  return (
    <BrowserRouter>
    <titlevalue.Provider value={{Title,setTitle,page,setPage,perpage,setPerPage,setPage}}>
    <Nav />
  
    <Routes>
     

      <Route path='/' element ={<Header />} />
    
      
      <Route path='/nextpage/:id' element ={<Nextpage />} />
   
    </Routes>
    </titlevalue.Provider>
    </BrowserRouter>
  )
}

export default App;
