
import './App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loader'
import { useSelector } from "react-redux";


function App() {
    const Loader = useSelector((store)=> store.fetchStatus)


  return (
    <>
    <Header></Header>
    {Loader.currentlyfetching? <Loading/> : <Outlet/>}
    
    <Footer></Footer>
    </>
  )
}

export default App
