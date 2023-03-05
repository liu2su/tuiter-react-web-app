import spacex from "./profile.json";
import {useState} from "react";
const EditProfileScreen = () => {
    const [profile, setProfile] = useState(spacex);
    return(
        <div>
            <h2>Edit Profile</h2>
            <input value={profile.username} readOnly/>
            <input value={profile.password} type="password" onChange = {(e) => setProfile({...profile,password:e.target.value})}/>
            <input value={profile.firstName}/>
            <input value={profile.lastName}/>
            <textarea value={profile.bio}></textarea>
        </div>
    );
}
export default EditProfileScreen;