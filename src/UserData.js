import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./userdata.css";

function UserData() {
    const [userdata, setUserdata] = useState([]);
    const [selecteduser, setSelecteduser] = useState(null);
    const getdata = async () => {
        try {
            const response = await axios.get('https://6616686cb8b8e32ffc7d63b9.mockapi.io/admin/admin');
            setUserdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };


    // useEffect(() => {
    //     console.log(selecteduser);
    // }, [selecteduser]);

    const handleUserClick = (user) => {
        setSelecteduser(user);
    }
    const handleCloseInfo = () => {
        setSelecteduser(null);
    }
    const handleDelete = (id) => {
        axios.delete(`https://6616686cb8b8e32ffc7d63b9.mockapi.io/admin/admin/${id}`)
    }
    useEffect(() => {
        getdata();
    }, [userdata]);

    return (
        <>
            <h1 id='uh1'>User Data</h1>

            <div id='container'>
                {
                    userdata.map((data) => {
                        return (
                            <div className='data-item' >
                                <div onClick={() => {
                                    handleUserClick(data)
                                }}>
                                    <div className='info-div1'
                                    >
                                        <p className='name'>Name: {data.name}</p>
                                        <p className='description'><b>Description: </b>{data.description}</p>
                                    </div>
                                    <div className='info-div2'>
                                        <img src={data.img} alt='img' height='20px' width='20px' />
                                    </div>
                                </div>
                                <button className='btn'>Edit</button>
                                <button className='btn' onClick={() => { handleDelete(data.id) }}>Delete</button>
                            </div>
                        )
                    })

                }
                {selecteduser && (
                    <div className="additional-info">
                        <p><b>Name:</b> {selecteduser.name}</p>
                        <p><b>Email:</b> {selecteduser.email}</p>
                        <p><b>Contact Number:</b> {selecteduser.number}</p>
                        <p><b>Interest:</b> {selecteduser.interest}</p>
                        <p><b>Description:</b> {selecteduser.description}</p>
                        <button className="btn" onClick={handleCloseInfo}>Close</button>
                    </div>
                )}
            </div >
        </>
    )
}

export default UserData