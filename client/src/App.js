import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './screens/LandingPage/index';
import Navdark from './components/navbar_dark';
import OurBlog from './screens/LandingPage/OurBlog';
import ContactUs from './screens/LandingPage/ContactUs';
import Products from './screens/LandingPage/Products';

function App() {
  return (
    
    
    <Router>
      <Navdark/>
      <Routes>
        <Route exact path='/' element={<Index/>}>
        </Route>
        <Route path='/blogs' element={<OurBlog/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/products' element={<Products/>}/>
       
      </Routes>
    </Router>
        
  );
}

export default App;
