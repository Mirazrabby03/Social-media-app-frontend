import React from 'react';
import "./sidebar.css";
import {Event, Group, People, RssFeed, School, Search} from '@material-ui/icons';


export const Sidebar = (props) => {
  return(
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Find Friends</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
    <hr className ="sidebarHr" />
    <ul className="sidebarFriendList">
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
      <li className="sidebarFriend">
        <img src="" alt="" className="sidebarFriendImg" />
        <span className ="sidebarFriendName">Miraz khan</span>
      </li>
    </ul>
    </div>
    </div>
   )
  }

  export default Sidebar;
