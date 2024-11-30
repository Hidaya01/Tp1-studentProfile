import React from "react";
import "./Profile.css"; 
import profileImg from '../images/student1.jpg';

function Profile() {
  return (
    <div>   
        <div className="profile-container">
                     
        <div className="card left-card">
            <img src={profileImg} alt="" />
            <hr />
            <h2>Oussama Tahiri</h2>
            <p> <b>Student ID </b>:2345678</p>
            <p> <b>Class</b> :B</p>
            <p> <b>Section</b>  :2</p>

        </div>

        <div className="right-cards">
            {/*  1Right Card */}
            <div className="card">
                <h3>Personal Informations</h3>
                <table border={1}>
                <tr>
                    <td>Roll :</td>
                    <td>125</td>
                    </tr>
                <tr>
                    <td>Academic Year :</td>
                    <td>2024</td>
                </tr>
                <tr>
                    <td>Gender :</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Groupe :</td>
                    <td>C</td>
                </tr>
                </table>
            </div>

            {/* 2Right Card */}
            <div className="card">
            <h3>Other Informations</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eum doloribus corporis aut. Deleniti harum vitae quae eius ipsa, 
                 recusandae earum magnam corrupti quas error ab, consectetur eaque. 
                Repellendus, nostrum error.</p>
            </div>
        </div>
        </div>
    </div>    
  );
}

export default Profile;
