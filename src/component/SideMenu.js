import React, {useEffect, useState} from 'react';
import '../scss/NavBar.scss';
import { VscChevronDown, VscChevronUp, VscAccount,VscMail,VscHome,VscSignOut} from "react-icons/vsc";
import SubSideMenu from './SubSideMenu';

function SideMenu(props){
    const [childHide, setChildHide] = useState(true);
 

    const item = props.item;
    const index = props.index;
    const show = props.show;
    const hide = props.isClose;
    const icon = "VscChevronDown"
    function clickHandler(){
        if(hide == false){
            setChildHide(!childHide);
        }else{
            show();
            setChildHide(!childHide);
        }
    }
    console.log(item);
    return (         
        <li key= {index} className={item.cName} onClick={clickHandler}>
            <div className="parentMenu">
                
            {item.icon}
            <div className ="menuName">{item.title}</div>
                <span className = "childState">
                    {
                        childHide ? <VscChevronDown/> : <VscChevronUp/> 
                    }
                </span>
            </div>
            <SubSideMenu subItem= {item.subNav} hide={childHide} show={show} isClose={childHide}></SubSideMenu>
        </li>
    )
}
export default SideMenu;