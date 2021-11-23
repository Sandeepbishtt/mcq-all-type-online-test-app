import React from 'react';
import StartPage from './Components/StartPage'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Question from './Pages/Question'

function App() {
  return (
    <Router>
    <Routes>
 <Route path="/" element ={<StartPage/>}  />
 <Route path="/Question/:id" element ={<Question/>}  />
    </Routes>
    </Router>
  );
}

export default App;
