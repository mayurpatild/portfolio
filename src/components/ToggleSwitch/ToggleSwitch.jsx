import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';
import "./ToggleSwitch.css";
import { Wrapper } from './styles';
const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <Wrapper type="button" onClick={() => {
                                             styleContext.changeTheme();
                                             setChecked(!isChecked);
                                           }}>
         <img src={isChecked === true ? moonIcon : sunIcon} alt={isChecked} />
      </Wrapper>
    </label>


  );
};
export default ToggleSwitch;