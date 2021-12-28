import React, { useState, createContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import ServesCenter from "./components/Home/ServesCenter/ServesCenter";
import NavigationBar from "./components/Home/Header/NavigationBar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import YourServes from "./components/YourServes/YourServes/YourServes";
import ServesList from "./components/YourServes/ServesList/ServesList";
import Review from "./components/YourServes/Review/Review";




export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <NavigationBar></NavigationBar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/servesCenter" element={
           <PrivateRoute>
              <ServesCenter/>
           </PrivateRoute>
          }/>
           <Route path="/serves" element={
           <PrivateRoute>
              <YourServes/>
           </PrivateRoute>
          }/>
           <Route path="/servesList" element={ <ServesList/> }/>
           <Route path="/review" element={ <Review/> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
