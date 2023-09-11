

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import ExpensePage from './pages/expense-tracker/ExpensePage.js';
import HomeImage from "../src/Images/new.png"
import Authentication from './pages/auth/Authentication.js';
function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover', // You can adjust the background size as needed
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <div style={backgroundImageStyle}  className="App">
     
      <Router>
        <Routes>
          <Route path='/'  element={<Authentication />} />
          <Route path='/expense-tracker'  element={<ExpensePage />} />
          <Route path='/home'  element={ExpensePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
