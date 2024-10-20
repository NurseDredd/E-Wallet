import './App.css'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import AddCard from './routes/AddCard';
import Settings from './routes/Settings';
import CardDetails from './routes/CardDetails';
import Header from './components/Header/Header';
import styles from './components/ThemeOptions/theme.module.css';


function App() {

  const theme = useSelector((state) => state.theme.theme);
  console.log("Current theme:", theme)


  return (
    <>
    
    <Router>
    <div className={`${styles.wrapper} ${styles[theme]}`} id="wrapper">
    <Header/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path ='/addcard' element = {<AddCard/>}/>
        <Route path ='/settings' element = {<Settings/>}/>
        <Route path='/card/:id' element={<CardDetails />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
