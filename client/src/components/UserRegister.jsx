import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    let navigate = useNavigate();

    const [userReg, setUserReg] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        phoneNo: ""
    });
    
    const { firstName, lastName, email, userName, password, phoneNo } = userReg;

    const inputChange = async (e) => {
        // console.log(e.target.value);
        setUserReg({...userReg, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5500/api/user/addUser", userReg);
        alert('Data had been added successfully');
        navigate("/")
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"  
                    value={firstName}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your first name"
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your last name"
                    required
                    autoComplete="off"
                />
                <br />
                <br />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your email"
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <label htmlFor="userName">User Name:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName" 
                    value={userName}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your username"
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your password"
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <label htmlFor="phoneNo">Phone No. :</label>
                <input
                    type="text"
                    name="phoneNo"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={e => inputChange(e)}
                    placeholder="Enter your phone No. "
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserRegister;





