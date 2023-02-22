
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 
function CheckOutInitiatorComponant() {

    const [mobilenumber, setmobilenumber] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("Car");
    const [ammoutToPay, setAmmountToPay] = useState("");
    const navigate = useNavigate();

    
    const handlemobilenumberChange = (e) => {
        setmobilenumber(e.target.value);
        var jsonDataMobileNumber={
            "mobileNumber":e.target.value
        }
        console.log(jsonDataMobileNumber);
        fetch('http://localhost:8888/findvehicle', {

            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonDataMobileNumber)

        }).then((result) => {
            result.json().then((Response) => {
                if (Response!= null) {
                    console.log(Response)
                    setVehicleNumber(Response.vehicleNumber);
                    setVehicleType(Response.vehicleType);
                    localStorage.setItem('checkOutInformation', JSON.stringify(Response))
                     //var p =Response.Output;
                    // toast.success(p)
                     
                } else {
                    // toast.error("Response.Output")
                }
            })
        })
    };

    const handleVehicleNumberChange = (e) => {
        setVehicleNumber(e.target.value);
    };

    const handleClickPayment = (e) => {
       navigate("/payment")
    };


    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
    };
    const handleAmmountToPayChange = (e) => {
        setAmmountToPay(e.target.value);
    };
    var jsonData = {

        "mobileNumber": mobilenumber,
        "vehicleNumber": vehicleNumber,
        "vehicleType": vehicleType
    }
    function handleClick() {

        console.log(jsonData);
        fetch('http://localhost:8888/CheckOut', {

            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonData)

        }).then((result) => {
            result.json().then((Response) => {
                if (Response!= null) {
                    console.log(Response.Output)
                    var p =Response.Output;
                    setAmmountToPay(Response.Output);
                    toast.success(p)
                   
                    // navigate("/")
                } else {
                    toast.error("Response.Output")
                }
            })
        }
       
        )
        const button1 = document.getElementById('CheckOutItitite');
        button1.style.display = "none";
        const button2 = document.getElementById('Payment');
        button2.style.display = "block";
    }
    return (
        <>
            <>
                <div className="checkInform">
                    <form id="msform" style={{ marginTop: "10%" }}>
                        <fieldset id="p1">
                            <h2 class="fs-title">Check Out Initiate</h2>
                            <h3 class="fs-subtitle">Please take mobile Number</h3>

                            <input type="text" value={mobilenumber}
                                onChange={handlemobilenumberChange}
                                placeholder="Enter your mobilenumber" />

                            <input type="text" value={vehicleNumber}
                                onChange={handleVehicleNumberChange}
                                placeholder="Enter your Vehicle Number" />

                            <input type="text" value={ammoutToPay}
                                onChange={handleAmmountToPayChange}
                                placeholder="Ammount to pay" />    

                            <label for="cars" style={{marginLeft:"5%"}}>Choose Vehicle Type:</label>
                            <select name="cars" id="cars" value={vehicleType}
                                     onChange={handleVehicleTypeChange} >
                                <option value="Car" >Car</option>
                                <option value="Bike" >Bike</option>
                                <option value="Truck" >Truck</option>                            
                            </select>          
                            <input id="CheckOutItitite" className="button-12"  type="button" name="Sign In" class="next action-button" value="Initiate Check Out" onClick={handleClick} />
                            <input id="Payment" style={{display:"none" ,marginTop:"10%",marginLeft:"45%"}} className="button-12"  type="button" name="Payment" class="next action-button" value="Go To Payment" onClick={handleClickPayment} />
                        </fieldset>
                    </form>
                </div>


            </>
        </>
    );
} export default CheckOutInitiatorComponant