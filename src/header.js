import React from 'react';
import profile from './images/profile.png';


class ProfileHeader extends React.Component { 
    render () {
        return (
            <div className="profile-div">
                <img src={profile} alt="your profile avatar"></img>
            </div>
        );
    }
}

export default ProfileHeader