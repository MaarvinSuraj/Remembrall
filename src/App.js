import './App.css';
import Navbar from './components/MithunComponents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Eventpage from './pages/Eventpage';
import Clubpage from './pages/Clubpage';
import Home from './components/MithunComponents/Home/Home';
import Mypins from './components/MithunComponents/Mypins/Mypins';
import LoginPage from './pages/kamalpages/login'
import Signup from './pages/kamalpages/signup'
import UserProfile from './pages/kamalpages/user-profile'

function App() {
    return (
        <>
            
            <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Mypins" element={<Mypins/>}/>
            <Route exact path='/Eventpage' element={<Eventpage/>} />
            <Route exact path='/Clubpage' element={<Clubpage/>} />
            <Route exact path='/UserProfile' element={<UserProfile/>} />
            </Routes>
            
        </>
    );
}

export default App;
