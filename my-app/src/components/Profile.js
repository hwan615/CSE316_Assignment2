import React, { useEffect, useState } from "react";
import { getUserAPIMethod, updateUserAPIMethod } from "../api/client";
import "../App3.css";
import myPhoto from './myphoto.jpg';

function Profile() {

    const [user, setUser] = useState([{
        photo:"",
        name: "",
    }]);

    useEffect(() => {
        getUserAPIMethod((users) => {
            setUser(users);
            console.dir(users);
        });
    }, []);

    const handleNameChange = (e) => {
        user[0].name = e.target.value;
        setUser([...user]);
    }

    const handleEmailChange = (e) => {
        user[0].email = e.target.value;
        setUser([...user]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("tset before")
        updateUserAPIMethod(user, (response) => {
        }) 
    }

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Profile</h2>
            </div>
            <form className="form">
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Profile photo</h3>
                    <div className="photocontent">
                        <img className="photo" src={user[0].photo} alt="myPhoto" />
                        <button className="imageButton">Choose new image</button>
                        <button className="removeButton">Remove image</button>
                    </div>
                </div>
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Name</h3>
                    <input className="input" value={user[0].name} onChange={handleNameChange}></input>
                </div>
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Email</h3>
                    <input className="input" value={user[0].email} onChange={handleEmailChange}></input>
                </div>
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Address</h3>
                    <input className="input"></input>
                    <input className="input"></input>
                </div>
                <button className="save-btn" type="submit">Save</button>
                <button className="logout">Log out</button>
            </form>
        </div>
    );
}

export default Profile;