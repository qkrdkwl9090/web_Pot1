import React, {useState} from 'react';
import '../scss/NavBar.scss';
import { VscMenu, VscSignOut} from "react-icons/vsc";
import {NavBarData} from './NavBarData';
import SideMenu from './SideMenu';
import {Link} from 'react-router-dom';

function SideBar(){
    const [hide, setHide] = useState(true);
    const showSidebar = () => setHide(!hide);

    return (
        
        <nav className={hide ? "menu-wrap-hide" : "menu-wrap"}>
            <div className="menuHideButton" onClick={showSidebar}><VscMenu/></div>        
            <ul>
                {NavBarData.map((item, index) => {
                    return(
                        <SideMenu key = {index}index={index} item={item} show={showSidebar} isClose = {hide}></SideMenu>
                    )
                })}
                <Link to={'/'}>
                <li className="nav-text"><VscSignOut/>Logout</li>
                </Link>


            </ul>
            
            
        </nav>
     

    )
}
export default SideBar;