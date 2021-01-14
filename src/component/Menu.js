import React, {useState} from 'react';
import '../scss/Menu.scss';

function Menu(){
    return (
        
        <section className="menu-wrap">
            <div className="menuHideButton">버튼</div>
            <ul>
                <li>
                    <div className="menuLogo"></div>
                </li>                
                <li>
                    <div className="menuContour"></div>
                </li>
                <li>
                    <form>
                        <label>
                            <input type="text" name="name"/>
                            <input type="password" name="passwoprd"/>
                            
                        </label>
                    </form>
                </li>
                <li>
                </li>                
                <li>
                    <div className="menuSignup">회원가입</div>
                </li>

            </ul>
        </section>
        
     

    )
}
export default Menu;