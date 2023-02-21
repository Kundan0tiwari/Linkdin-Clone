import React from 'react'
import "./header.css"
import HeaderOption from './headerOption'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
        {/* <h1>This is the header</h1> */}
        <div className='header_lft'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
            alt=''/>
            <div className="header_search">
                <SearchIcon/>
               <input type="text" />
            </div>
        </div>
        <div class="header_right">
            <HeaderOption Icon={HomeIcon} title = "Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
            <HeaderOption Icon={ChatIcon} title = "Messeges"/>
            <HeaderOption Icon={NotificationsIcon} title = "Notifications"/>
        </div>
    </div>
  )
}

export default Header
