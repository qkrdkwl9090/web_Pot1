import React, {useState} from 'react';
import '../scss/NavBar.scss';
import { VscMenu} from "react-icons/vsc";
import {NavBarData} from './NavBarData';
import {Route,Link} from 'react-router-dom';

function Menu(){
    const [hide, setHide] = useState(true);

    const showSidebar = () => setHide(!hide);
    return (
        
        <nav className={hide ? "menu-wrap-hide" : "menu-wrap"}>
            <div className="menuHideButton" onClick={showSidebar}><VscMenu/></div>
            <ul>
                {NavBarData.map((item, index) => {
                    return(
                        <li key= {index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}


            </ul>
            
        </nav>
        
     

    )
}
export default Menu;