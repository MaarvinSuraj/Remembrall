import './App.css';
import Navbar from './components/MithunComponents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Eventpage from './pages/Eventpage';
import Clubpage from './pages/Clubpage';
import Home from './components/MithunComponents/Home/Home';
import Mypins from './components/MithunComponents/Mypins/Mypins';


function App() {
    return (
        <>
            <Navbar/>
            
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Mypins" element={<Mypins/>}/>
            <Route exact path='/Eventpage' element={<Eventpage/>} />
            <Route exact path='/Clubpage' element={<Clubpage/>} />
            </Routes>
            
        </>
    );
}

export default App;
