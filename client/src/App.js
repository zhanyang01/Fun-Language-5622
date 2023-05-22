
import login from './login'
import register from './register'
import homepage from './homepage'
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route

} from "react-router-dom";
import {useState} from 'react';

function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
<Switch>
  <Route exact path="/">
    {
      user && user._id ? <homepage/>:<login/>
    }<homepage/></Route>
  <Route path="/Login"><login setLoginUser={setLoginUser}/></Route>
  <Route path="/Register"><register/></Route>
</Switch>

      </Router>

    </div>
  );
}

export default App;
