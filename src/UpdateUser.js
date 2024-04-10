import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdateUser() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [interest, setInterest] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");

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
    const onUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`https://6616686cb8b8e32ffc7d63b9.mockapi.io/admin/admin/${id}`,
            {
                name: name,
                email: email,
                number: number,
                interest: interest,
                description: description,
                img: img
            }
        )
        await navigate("/user");
    }

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setNumber(localStorage.getItem("number"));
        setInterest(localStorage.getItem("interest"));
        setDescription(localStorage.getItem("description"));
        setImg(localStorage.getItem("img"));
    }, []);

    return (
        <>
            <h1 id='ah1'>Update Data</h1>

            <form onSubmit={onUpdate}>

                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' value={name} onChange={handleNameChange} required></input><br />

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder='Email' value={email} onChange={handleEmailChange} required /><br />

                <label htmlFor='number'>Contact Number: </label>
                <input type='tel' id='number' placeholder='Contact number' value={number} onChange={handleNumberChange} required /><br />

                <label htmlFor='interest'>Interest: </label>
                <input type='text' id='interest' placeholder='Interest' value={interest} onChange={handleInterestChange} required /><br />

                <label htmlFor='desc'>Description: </label>
                <textarea id='desc' placeholder='Enter your Description' rows={4} value={description} onChange={handleDescriptionChange} required /><br />

                <label htmlFor='image'>Upload Picture: </label>
                <input type="text" id='image' name='image' accept='image/*' value={img} onChange={handleImgChange} required /><br />

                <button type='submit'>Update</button>
            </form>
        </>
    )
}

export default UpdateUser