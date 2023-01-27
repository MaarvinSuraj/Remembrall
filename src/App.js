import './App.css';
import Navbarf from './components/Navbarf.jsx';
import Bannerf from './components/Bannerf';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import Eventpage from './pages/Eventpage';
import Clubpage from './pages/Clubpage';


function App() {
    return (
        <>
            <Navbarf />
            <BrowserRouter>
            <Routes>
            <Route exact path='/Eventpage' element={<Eventpage/>} />
            <Route exact path='/' element={<Clubpage/>} />
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
