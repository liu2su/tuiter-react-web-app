import React from "react";
import { SlPaperPlane } from 'react-icons/sl';
import { SlHome } from 'react-icons/sl';
import { SlMagnifier } from 'react-icons/sl';
import {SlOptions} from 'react-icons/sl';
import {SlBell} from 'react-icons/sl';
import {SlBubbles} from 'react-icons/sl';
import {SlPin} from 'react-icons/sl';
import {SlList} from 'react-icons/sl';
import {SlUser} from 'react-icons/sl';

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div className="list-group">
            <a className="list-group-item "><SlPaperPlane/> Tuiter</a>
            <a className={`list-group-item ${active === 'home'?'active':''}`}><SlHome/> Home</a>
            <a className={`list-group-item ${active === 'explore'?'active':''}`}><SlMagnifier/> Explore</a>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}><SlBell/> Notifications</a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}><SlBubbles/> Messages</a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}><SlPin/> Bookmarks</a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}><SlList/> Lists</a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`}><SlUser/>Profile</a>
            <a className={`list-group-item ${active === 'more'?'active':''}`}><SlOptions/> More </a>
        </div>
    );
};
export default NavigationSidebar;