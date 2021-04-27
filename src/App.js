
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PhonesProduct from './Components/Products/PhonesProducts/PhonesProduct';
import Header from './Header/Header';
import PhonesHome from './Components/Products/PhonesProducts/PhonesHome';

function App() {
  

  return (
    <div className="App">
     
      <Router>
        <Header />
         <Switch>
            <Route path='/phones' component={PhonesHome}/>
            
            <Route exact path='/' component={()=><h1>hello</h1>} />
            
         </Switch>

      </Router>
      
      
      
    </div>
  );
}

export default App;
