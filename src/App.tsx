import './App.css';
import Landing from './components/landing/Landing';
import TC from './components/terms/TC';
import Policy from './components/policy/Policy';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ContactPage from './components/contact/ContactPage';
import FeedbackPage from './components/feedback/FeedBackPage';
import { useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';



function App() {
  useEffect(() => {
    FingerprintJS.load().then(fp => {
      fp.get().then(result => {
        const visitorId = result.visitorId;
        fetch('https://backend-avi.fivlog.space/api/visitor/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ visitorId }),
        })
      });
    });
  }, []);
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/'  Component={Landing}></Route>
        <Route  path='/terms'  Component={TC}></Route>
        <Route  path='/privacy'  Component={Policy}></Route>
        <Route  path='/contact'  Component={ContactPage}></Route>
        <Route path='/feedback' Component={FeedbackPage}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;