import React from 'react'
import ProfileWidget from '../../component/profileWidget'

import "./profileContent.css"
const ProfileContent = () => {
  return (
    <div className="profile-details">
      <div className="profileDetails-Contents">
        <div className="profile-texts">
          <h1>Hello, Ositadinma Nwangwu</h1>
          <span>Welcome and good to have you back.</span>
        </div>
        <div>
          <h1 className="profile-texts">Things to do</h1>
          <ProfileWidget text="Upload your employee performance agreement" typeBtn={false} />
          <ProfileWidget text="Start quarterly self review" typeBtn={true} />
        </div>
      </div>
    </div>
  )
}

export default ProfileContent