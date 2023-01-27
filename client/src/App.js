import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Index from './screens/LandingPage/index';
import Navdark from './components/navbar_dark';
import OurBlog from './screens/LandingPage/OurBlog';
import ContactUs from './screens/LandingPage/ContactUs';
// import AdminPage from './screens/Admin/AdminPage';
import Products from './screens/LandingPage/Products';
// import AdminDashboard from '../../admin/src/pages/Dashboard';

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
        {/* <Route path='/site/admin' element={<AdminPage/>}/>
        <Route path="/site/admin/dashboard" element={<AdminDashboard/>}/> */}
       
      </Routes>
    </Router>
        
  );
}

export default App;
