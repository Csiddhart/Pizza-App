import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}/>
      <Route path='/*' element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
