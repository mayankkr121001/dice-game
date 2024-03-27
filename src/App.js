
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Gamepage from './components/Gamepage';

const App = ()=>{
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/gamepage' element={<Gamepage/>}></Route>
      <Route  path='*' element={<Home/>}></Route>
    </Routes>
  )
}

export default App;