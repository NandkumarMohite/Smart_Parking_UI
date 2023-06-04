import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckInComponant from './components/CheckInComponent';
import CheckOutInitiatorComponant from './components/CheckOutInititerComponent';
import PaymentComponent from './components/PayementComponent';
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './components/HeaderComponanent'


function App() {
  return (
    <div>
     <BrowserRouter>
    <HeaderComponent/>
      <Routes>
        <Route path='/WelcomeComponent' element={<WelcomeComponent/>}> </Route>
      <Route path="/" element={<CheckInComponant/>}></Route>
      <Route path="/CheckOutItitor" element={<CheckOutInitiatorComponant/>}></Route>
      <Route path="/payment" element={<PaymentComponent/>}></Route>
      <Route path="/login" element={<LoginComponent/>}></Route>
      </Routes>
      <ToastContainer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
