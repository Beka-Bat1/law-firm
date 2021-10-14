import React from 'react';
import './styles.css';

import BackgroundIcon from '@img/bg-pattern-how-we-work-desktop.svg';

interface Props {
   textLeft: string;
   buttonText: string;
   onClick: () => void;
}

function FindOutMore(props: Props) {
   const {textLeft = '', buttonText = '', onClick = () => {}} = props;
   return (
      <div className="container findout-background-color section">
         <div style={{position: 'relative', zIndex: 1}}>
            <img
               className="findout-background-image img-fluid"
               alt="background_image"
               src={BackgroundIcon}
               style={{position: 'absolute', right: -12, top: 4}}
            />
         </div>
         <div
            className="findout-top-container container px-5 d-flex align-items-center justify-content-between h-100"
            style={{position: 'relative', zIndex: 4}}>
            <div className="ms-3 col-md-4 col-sm-6">
               <h1 className="text-wrap">{textLeft}</h1>
            </div>

            <div className="d-flex me-md-5 align-items-center justify-content-between h-100">
               <button
                  className="btn btn-lg btn-primary btn-white-primary my-5"
                  onClick={onClick}>
                  {buttonText}
               </button>
            </div>
         </div>
      </div>
   );
}

export default FindOutMore;
