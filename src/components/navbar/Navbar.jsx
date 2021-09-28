import React, { useContext } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export const Navbar = (props) => {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_PUBLIC_FOLDER;

  return(
    <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to ="/" style={{textDecoration : "none"}} >
          <span className="logo">MemeVerse</span>
            </Link>  
        </div>
        {/* <div className="navbarCenter">
          <div className="searchbar">
            <Search/>
            <input placeholder="search anything" className="searchInput" />
          </div>
        </div> */}
        <div className="navbarRight">
          <div className="navbarLinks">
          <Link to = "/" style={{textDecoration: "none" , color: "white"}} >
          <span className="navbarLink">Homepage</span>
          </Link>
          <Link to = {`/profile/${user.username}`} style={{textDecoration: "none" , color: "white"}} >
          <span className="navbarLink">
            Profile</span>
            </Link>
          </div>
          {/* <div className="navbarIcons">
          <div className="navarIconItem">
    <Person/>
    <span className="navbarIconBadge">1</span>
          </div>
         
        </div> */}
        <div className="navbarUsername">
        <Link to = {`/profile/${user.username}`} style={{textDecoration: "none" , color: "white"}} >
          {user.username}
          </Link>
        </div>
        <img src={user.profilePicture ? PF + user.profilePicture : "assets/person/noAvatar.png"} alt="" className="navbarImg" />
        {/* <img  src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="navbarImg" /> */}
  </div>
         
    </div>
   )

 }

 export default Navbar;