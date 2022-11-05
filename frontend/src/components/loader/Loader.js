import React from 'react';
import loaderImage from "../../assets/loader.gif";
import ReactDOM from 'react-dom';
import "./Loader.scss";

// Will use create portal, because, if you don't use it, when it will be loading, it will appear just on the half of the screen

//Full screen loader
const Loader = () => {
  return ReactDOM.createPortal(
    <div className='wrapper'>
        <div className='loader'>
            <img src={loaderImage} alt="Loading ..."/>
        </div>
    </div>,
 document.getElementById("loader")
  )
}

//Just spinner image
export const SpinnerImg = () => {
    return (
        <div className='--center-all'>
                 <img src={loaderImage} alt="Loading ..."/>
        </div>
    );
};

export default Loader