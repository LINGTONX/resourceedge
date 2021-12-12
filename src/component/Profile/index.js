import {useState} from 'react'
import "./Profile.css"
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()
    const [IsActive, setIsActive] = useState(false)
    const handleLogOut = () => {
        navigate('/')
      }

    return (
        <div className="profile-container">
            <label htmlFor="profile">
                <img src="images/profileImg.svg" alt="profile"></img>
            </label>
            <input type="checkbox" id="profile" />
            <div className="profile-dropdown">
                <div>
                <h1>OSITADINMA NWANGWU</h1> 
                <span>Profile</span>
                </div>

                <div className="use-as">
                    <span>Use Resource Edge as</span>
                    <div className="talent-manager">
                        <img src="images/Talent manager.svg"></img>
                        <p>Talent Manager</p>
                        {
                            !IsActive ? <img src="images/check.svg"></img> : null
                        }
                    </div>

                    <div className="employee">
                        <img src="images/Employee.svg"></img>
                        <p>Employee</p>
                        {
                            IsActive ? <img src=""></img> : null
                        }
                    </div>
                </div>
                <div>
                <button onClick={handleLogOut}>Logout</button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
