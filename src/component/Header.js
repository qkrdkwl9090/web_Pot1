import React, {useState} from 'react';
import '../scss/Header.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Header(){
//     const [state, setState] = useState({
//         checked: true,
//       });
      
//   const handleChange = (event) => {
//       console.log(state.checked);
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
    return (
        <header>
            <div className="headerContent">
                <a href="/"><div className = "title">DoDong</div></a>
              
                {/* <div className="darkMode">
                    <FormControlLabel
                        control={<Switch checked={state.checked} onChange={handleChange} color="primary"name="checked" />}
                        label="Mode"
                    />
                </div> */}

            </div>
        </header>

    )
}
export default Header;