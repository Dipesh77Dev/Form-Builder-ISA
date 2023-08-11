import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleClick = async (e) => {
        await axios.post("http://localhost:5500/api/user/addUser", firstName, lastName, email, userName, password, phoneNo)
        // alert("All Data had been added successfully")
        console.log(firstName, lastName, email, userName, password, phoneNo);
        navigate('/');
        alert('Data had been added successfully')
    };

    // const handleChange = (e) => {
    //     // setLastName(e.target.value);
    //     console.log(e.target.value);
    //     setLastName({...lastName, [e.target.name] : [e.target.value]})
    // };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"  
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    //   onChange={e => handleChange(e)}
                    onChange={(e) => setLastName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setUserName(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Enter your phone No. "
                    required
                    autoComplete="off"
                />
                <br />
                <br />

                <button type="submit" onClick={() => handleClick()}>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;






// labels are bound to input text using the 'for' attribute. Input control id is matched with the 'for' attribute of the label, instead of for we use htmlFor in React.