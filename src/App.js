import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckInComponant from './components/CheckInComponent';
import CheckOutInitiatorComponant from './components/CheckOutInititerComponent';
import PaymentComponent from './components/PayementComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
     <BrowserRouter>

      <Routes>
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
