import React, {useState} from 'react';
import '../scss/Menu.scss';
import { InputLabel, TextField } from '@material-ui/core';
import { VscMenu } from "react-icons/vsc";
import logo1 from "../images/logo.svg";
function Menu(){
    const [hide, setHide] = useState(false);

    const showSidebar = () => setHide(!hide);
    return (
        
        <section className="menu-wrap">
            <div className="menuHideButton" onClick={showSidebar}><VscMenu/></div>
            <ul>
                <li>
                    <div className="menuLogo"><img src={logo1}/></div>
                </li>                
                <li>
                    <div className="menuContour"></div>
                </li>
                <li>
                    <form>                       
                        <TextField id="inputId" label="ID" color="red"/>
                        <TextField id="inputPw" label="PW" type="password" />                            
                    </form>
                </li>         
                <li>
                    <div className="menuLogin">로그인</div>
                </li>                
                <li>
                    <div className="menuSignup">회원가입</div>
                </li>

            </ul>
        </section>
        
     

    )
}
export default Menu;