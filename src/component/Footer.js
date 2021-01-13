import React from 'react';
import '../scss/Footer.scss';

function Footer(){
    return (
        <footer>
            <div>
                <p>DoDong</p>
            </div>
            <div className="contour"></div>
            <div>
                <div className="info">
                    <p>박동현</p>
                    <p className="grey">qkrdkwl9090@naver.com</p>                    
                    <p className="grey">카카오톡 qkrdkwl9090</p>
                </div>
                <p>Copyright ⓒ 2021 DoDong All Rights Reserved.</p>
            </div>
        </footer>

    )
}
export default Footer;