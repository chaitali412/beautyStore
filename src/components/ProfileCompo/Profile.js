import { BiLogOut } from 'react-icons/bi';
import './Profile.css';
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {

    return (
        <div className="container-fluid centered-container">
            <div className="row mb-5 mt-3">
                <h2>Profile</h2>
                <h6>I'm creative php developer</h6></div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <h4>About Me</h4>
                    <h6>I'm an engineer and working hard for great challanges</h6>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <img src="https://i.pravatar.cc/150" 
                        alt="Profile"
                        className="img-fluid rounded-circle" />
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <h4>Details</h4>
                    <div>
                        <h5>Name:</h5>
                        <h6>Manish Varma</h6>
                    </div>
                    <div>
                        <h5>Age:</h5>
                        <h6>33 years</h6>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <h6>Netherlands east 33 yard</h6>
                    </div>
                    <div>
                        <h6 className='mt-3'>Log out</h6>
                       <IoIosLogOut size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;