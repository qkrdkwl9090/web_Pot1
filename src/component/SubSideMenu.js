import React, {useState, useEffect} from 'react';
import '../scss/NavBar.scss';
import {Link} from 'react-router-dom';

function SubSideMenu({hide,subItem,show,childHide}){
    function clickHandler(){
        if(childHide == true){
            show();
        }
    }
    console.log(subItem.ofType);
    return (
        <ul className={hide ? "sub-menu-wrap-hide" : "sub-menu-wrap"}>
        {subItem.map((item, index) => {
            return(
                <Link to={item.path}>
                    <li key= {index} className={item.cName} onClick={show}>
                            <span>{item.title}</span>
                    </li>
                    </Link>
            )
        })}
    </ul>
       
         
     

    )
}
export default SubSideMenu;