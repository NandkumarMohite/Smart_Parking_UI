
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
function PaymentComponent() {

    const [mobilenumber, setmobilenumber] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("Car");
    const [ammoutToPay, setAmmountToPay] = useState("");
    const [paymentType, setPaymentType] = useState("Cash");
    const [checkInTime, setcheckInTime] = useState("");
    const [checkOutTime, setcheckOutTime] = useState("");
    const [date, setdate] = useState("");
    const navigate = useNavigate();

    const checkOutInformation = JSON.parse(localStorage.getItem("checkOutInformation"));
    useEffect(() => {
        setmobilenumber(checkOutInformation.mobileNumber);
        var jsonDataMobileNumber = {
            "mobileNumber": checkOutInformation.mobileNumber
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
                if (Response != null) {
                    console.log(Response)
                    setVehicleNumber(Response.vehicleNumber);
                    setVehicleType(Response.vehicleType);
                    setAmmountToPay(Response.toPayMoney)
                    localStorage.setItem('checkOutInformation', JSON.stringify(Response))

                } else {

                }
            })
        })

    }, [])

    const handlemobilenumberChange = (e) => {
    };

    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };
    const handleVehicleNumberChange = (e) => {
        setVehicleNumber(e.target.value);
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
        "vehicleType": vehicleType,
        "toPayMoney": ammoutToPay,
        "paymentType": paymentType
    }
    function handleClick() {

        console.log(jsonData);
        fetch('http://localhost:8888/payment', {

            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonData)

        }).then((result) => {
            result.json().then((Response) => {
                if (Response != null) {
                    console.log(Response.Output)
                    var p = Response.Output;
                    setAmmountToPay(Response.Output);
                    toast.success(p)
                    // navigate("/")
                } else {
                    toast.error("Response.Output")
                }
            })
        })

        const button1 = document.getElementById('Payment');
        button1.style.display = "none";
        const button2 = document.getElementById('CheckOutFinal');
        button2.style.display = "block";
    }

    function handleClickFinalCheckOut() {
        console.log(jsonData);
        fetch('http://localhost:8888/checkOutDone', {

            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonData)

        }).then((result) => {
            result.json().then((Response) => {
                if (Response != null) {
                    console.log(Response.Output)
                    setcheckInTime(Response.checkinTime)

                    setcheckOutTime(Response.checkOutTime)
                    setdate(Response.date)
                } else {
                    toast.error("Response.Output")
                }
            })
        })
console.log("hi")
      const hidinformation = document.getElementById('hidinformation');
      hidinformation.style.display = "block";
      const a1 = document.getElementById('a1');
      a1.style.display = "none";
      const a2 = document.getElementById('a2');
      a2.style.display = "none";
      const a3 = document.getElementById('a3');
      a3.style.display = "block";
      const a4 = document.getElementById('a4');
      a4.style.display = "block";
    }
    return (
        <>
            <>
                <div className="checkInform">
                    <form id="msform" style={{ marginTop: "10%" }}>
                        <fieldset id="p1">
                        <h2 id="a1" className="fs-title">Check IN to Parking</h2>
                            <h3 id="a2" className="fs-subtitle">Please take mobile Number and Vehicle Number</h3>
                            <h2 id="a3" style={{display:"none"}} className="fs-title">Check Out Done </h2>
                            <h3 id="a4" style={{display:"none"}} className="fs-subtitle">Happy to Have you</h3>

                            <input type="text" value={mobilenumber}
                                onChange={handlemobilenumberChange}
                                placeholder="Enter your mobilenumber" />

                            <input type="text" value={vehicleNumber}
                                onChange={handleVehicleNumberChange}
                                placeholder="Enter your Vehicle Number" />

                            <input type="text" value={ammoutToPay}
                                onChange={handleAmmountToPayChange}
                                placeholder="Ammount to pay" />

                            <label for="cars" style={{ marginLeft: "5%" }}>Choose Vehicle Type:</label>
                            <select name="cars" id="cars" value={vehicleType}
                                onChange={handleVehicleTypeChange} >
                                <option value="Car" >Car</option>
                                <option value="Bike" >Bike</option>
                                <option value="Truck" >Truck</option>
                            </select>
                            <label for="Payment" style={{ marginLeft: "5%" }}>Choose Payment Type:</label>
                            <select name="Payment" id="cars" value={paymentType}
                                onChange={handlePaymentTypeChange} >
                                <option value="Cash" >Cash</option>
                                <option value="UPI" >UPI</option>
                                <option value="Card" >Card</option>
                            </select>
                            <div className="hidinformation" id="hidinformation" style={{ display: "none" }} >
                                <label for="Check In Time">Check In Time:</label>
                                <input type="text" value={checkInTime}

                                />
                                <label for="Check Out Time">Check Out Time:</label>
                                <input type="text" value={checkOutTime}

                                />
                                <label for="Date">Date:</label>
                                <input type="Date" value={date}

                                />
                            </div>
                            <input id="Payment" className="button-12" style={{ display: "block", marginTop: "10%", marginLeft: "45%" }} type="button" name="Payment" class="next action-button" value="Payment" onClick={handleClick} />
                            <input id="CheckOutFinal" className="button-12" style={{ display: "none", marginTop: "10%", marginLeft: "43%" }} type="button" name="FinalCheckOut" class="next action-button" value="FinalCheckOutButton" onClick={handleClickFinalCheckOut} />
                        </fieldset>
                    </form>
                </div>


            </>
        </>
    );
} export default PaymentComponent