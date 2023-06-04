
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 
function CheckInComponant() {

    const [mobilenumber, setmobilenumber] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("Car");

    const navigate = useNavigate();

    const handlemobilenumberChange = (e) => {
        
        setmobilenumber(e.target.value);
    };

    const handleVehicleNumberChange = (e) => {
        setVehicleNumber(e.target.value);
    };

    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
    };
    var jsonData = {

        "mobileNumber": mobilenumber,
        "vehicleNumber": vehicleNumber,
        "vehicleType": vehicleType
    }
    function handleClick() {
        fetch('http://localhost:8888/availability', {

            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            

        }).then((result) => {
            result.json().then((Response) => {

                var Output =Response.Output;
                console.log(Output.length)
                if(Output.length>15){

                    console.log(jsonData);
           fetch('http://localhost:8888/CheckIn', {

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
                   
                    if(p.length < 22){
                    toast.success(p)
                    }else{
                        toast.error(p) 
                    }
                    navigate("/")
                } else {
                    toast.error("Response.Output")
                }
            })
        })

                }
                else{
                    toast.error(Output)
                }
                
            })
        })
        
        
    }
    return (
        <>
            <>
                <div className="checkInform">
                    <form id="msform" style={{ marginTop: "10%" }}>
                        <fieldset id="p1">
                            <h2 className="fs-title">Check IN to Parking</h2>
                            <h3 className="fs-subtitle">Please take mobile Number and Vehicle Number</h3>

                            <input type="text" value={mobilenumber}
                                onChange={handlemobilenumberChange}
                                placeholder="Enter your mobilenumber" />

                            <input type="text" value={vehicleNumber}
                                onChange={handleVehicleNumberChange}
                                placeholder="Enter your Vehicle Number" />

                            <label for="cars" style={{marginLeft:"10%"}}>Choose Vehicle Type:</label>
                            <select name="cars" id="cars" value={vehicleType}
                                     onChange={handleVehicleTypeChange} >
                                <option value="Car" >Car</option>
                                <option value="Bike" >Bike</option>
                                <option value="Truck" >Truck</option>
                              
                            </select>
                                                   
                            <input className="button-12"  type="button" name="Sign In" class="next action-button" value="Check In To Parking" onClick={handleClick} />

                        </fieldset>
                    </form>
                </div>


            </>
        </>
    );
} export default CheckInComponant