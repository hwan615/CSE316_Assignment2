import React, { useState } from "react";
import "../App3.css";
import myPhoto from './myphoto.jpg';

function Profile() {

    const [name, setName] = useState(["this ", "that"]);
    const [email, setEmail] = useState(["suny@suny.com"]);
    const [profile, setProfile] = useState([]);
    const [address, setAddress] = useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
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
                        <img className="photo" src={myPhoto} alt="myPhoto" />
                        <button className="imageButton">Choose new image</button>
                        <button className="removeButton">Remove image</button>
                    </div>
                </div>
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Name</h3>
                    <input className="input" value={name} onChange={handleChange}></input>
                </div>
                <div className="box">
                    <h3 style={{ marginLeft: "15px", marginTop: "10px" }}>Email</h3>
                    <input className="input"></input>
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