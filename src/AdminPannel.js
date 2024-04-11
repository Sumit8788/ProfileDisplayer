import React, { useState } from 'react';
import './AdminPannel.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AdminPannel() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [interest, setInterest] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // console.log(name);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }
    const handleInterestChange = (e) => {
        setInterest(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleImgChange = (e) => {
        setImg(e.target.value);
    }
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(
            "https://6616686cb8b8e32ffc7d63b9.mockapi.io/admin/admin",
            {
                name: name,
                email: email,
                number: number,
                interest: interest,
                description: description,
                img: img
            });
        // console.log('Form submitted');
        await navigate("/user")
    };

    return (
        <>
            <h1 id='ah1'>Admin Pannel</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' value={name} onChange={handleNameChange} required></input><br />

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder='Email' value={email} onChange={handleEmailChange} required /><br />

                <label htmlFor='number'>Contact Number: </label>
                <input type='tel' id='number' placeholder='Contact number' value={number} onChange={handleNumberChange} required /><br />

                <label htmlFor='interest'>Interest: </label>
                <input type='text' id='interest' placeholder='Interest' value={interest} onChange={handleInterestChange} required /><br />

                <label htmlFor='desc'>Description: </label>
                <textarea id='desc' placeholder='Enter your Description' value={description} onChange={handleDescriptionChange} rows={4} required /><br />

                <label htmlFor='image'>Upload Picture: </label>
                <input type="text" id='image' name='image' accept='image/*' onChange={handleImgChange} required /><br />

                <button className='admin-btn' type='submit'>Upload</button>
                <Link to="/user">
                    <button className='admin-btn'>Show Users</button>
                </Link>
            </form>
        </>
    )
}

export default AdminPannel  