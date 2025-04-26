import './App.css';
import Landing from './components/landing/Landing';
import TC from './components/terms/TC';
import Policy from './components/policy/Policy';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ContactPage from './components/contact/ContactPage';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/'  Component={Landing}></Route>
        <Route  path='/terms'  Component={TC}></Route>
        <Route  path='/privacy'  Component={Policy}></Route>
        <Route  path='/contact'  Component={ContactPage}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;