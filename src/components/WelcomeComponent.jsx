import React, { Component, useEffect, useState } from 'react'
import chaddi from '../components/Mobile.jpg'
import PaymentComponent from './PayementComponent';
import CheckInComponant from './CheckInComponent';

function WelcomeComponent() {

    const [plan, setPlan] = useState([]);
    const [packageId, setpackageId] = useState("")


    var Response = [{
        "packageId": 1
    }, {
        "packageId": 2
    },
    {
        "packageId": 3
    },
    {
        "packageId": 4
    },
    {
        "packageId": 5
    },
    {
        "packageId": 6
    },
    {
        "packageId": 7
    }, {
        "packageId": 8
    }, {
        "packageId": 9
    }, {
        "packageId": 10
    }, {
        "packageId": 11
    }, {
        "packageId": 12
    }]

    useEffect(() => {
        fetch('http://localhost:8080/getfirst10', {

            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },


        }).then((result) => {
            result.json().then((Response) => {
                console.log(Response);
                setPlan(Response);
            })
        })

    }, [])


    return (
        <>
            <div className="container">
                <div className="welcomComponentMain" style={{marginTop: '100px',  zIndex: '-1'}}>
                    <div className="sideBar" style={{ position: 'fixed' }}>

                        <h3 >
                            Categories
                        </h3>
                        <div className="categories">

                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                        </div>

                        <h3>
                            Price
                        </h3>

                        <div className="categories">

                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>

                        </div>

                        <h3>
                            Size
                        </h3>
                        <div className="categories">

                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>
                            <div className="checkLable">
                                <input type="checkbox" />
                                <label>T-shirt</label>
                            </div>


                        </div>
                    </div>



                
                    <div className="containtInf">
                        <div className="container">
                            <div className="row">

                                {
                                    plan.map(
                                        Response =>
                                            <tr key={Response.packageId}>
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-image">
                                                            <img src={chaddi} alt="this is " />
                                                        </div>
                                                        <div class="card-details">

                                                            <h2>{Response.elementName}</h2>
                                                            <h4 className='element-description'>{Response.elementDiscription}</h4>
                                                            <button className='buttonCart'>Add to cart</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </tr>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    );
} export default WelcomeComponent;