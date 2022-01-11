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
import Services from "./components/Home/Services/Services";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin";
import ManageService from "./components/Admin/ManageService";




export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [allData, setAllData] = useState({});

  return (
    <UserContext.Provider value={{value1: [allData, setAllData], value2: [loggedInUser, setLoggedInUser]}}>
      <NavigationBar></NavigationBar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/services" element={ <Services/> }/>
           <Route path="/yourServes" element={ <YourServes/> }/>
           <Route path="/servesList" element={ <ServesList/> }/>
           <Route path="/review" element={ <Review/> }/>
           <Route path="/admin" element={ <OrderList/> }/>
           <Route path="/addService" element={ <AddService/> }/>
           <Route path="/makeAdmin" element={ <MakeAdmin/> }/>
           <Route path="/manageService" element={ <ManageService/> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
