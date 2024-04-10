import React from 'react';
import './AdminPannel.css';
function AdminPannel() {
    return (
        <>
            <h1>Admin Pannel</h1>
            
            <form>

                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' required></input><br />

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder='Email' required /><br />

                <label htmlFor='number'>Contact Number: </label>
                <input type='tel' id='number' placeholder='Contact number' required /><br />

                <label htmlFor='interest'>Interest: </label>
                <input type='text' id='interest' placeholder='Interest' required /><br />

                <label htmlFor='desc'>Description: </label>
                <textarea id='desc' placeholder='Enter your Description' rows={4} required /><br />

                <label htmlFor='image'>Upload Picture: </label>
                <input type="file" id='image' name='image' accept='image/*' required /><br />

                <button type='submit'>Upload</button>
            </form>
        </>
    )
}

export default AdminPannel  