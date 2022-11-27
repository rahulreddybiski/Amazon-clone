import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import {auth} from './firebase'


function App() {

  const [{user}, dispatch] = useStateValue();

  //code that runs based on a condition-->
  //useEffect hook
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user : null
        })
      }
    })

    return () => {
      //cleanup operations goes here
      unsubscribe();
    }
  }, [])


  return (
    <Router>
    <div className='App'>
      <Routes>

        
        <Route path='/checkout' element={
                                          <div>
                                            <Header />
                                            <Checkout />
                                          </div>
                                        }
                                        />

        <Route path='/login' element={<div>
                                          <Login />
                                        </div>}
                                        />
        
        <Route path='/' element={<div>
                                  <Header />
                                  <Home />
                                </div>}
                                />

                                

        

      </Routes>
    </div> 
    </Router>
  );
}

export default App;
