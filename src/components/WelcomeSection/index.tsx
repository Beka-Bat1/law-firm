import React from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router';

import useWindowDimensions from 'utils/getWindow';

import WelcomeImage from '@img/welcomeImage.jpg';
import IntroLeft from '@img/bg-pattern-intro-left-desktop.svg';
import BackgroundPatternRight from '@img/bg-pattern-intro-right-desktop.svg';

import './styles.css';

function WelcomeSection() {
   const {t} = useTranslation();
   const {width} = useWindowDimensions();

   const history = useHistory();

   const handleClick = () => {
      history.push('/contact');
   };

   return (
      <div className="welcome-section">
         <div className="background-colored">
            <div className="col-12" style={{position: 'relative', zIndex: 0}}>
               <img
                  className="welcome-background-pattern"
                  alt="background_image"
                  src={BackgroundPatternRight}
                  style={{
                     position: 'absolute',
                     zIndex: 1,
                     right: width >= 1600 ? -width / 9 : -40,
                     maxWidth: '300px',
                  }}
               />
               <img
                  className="background-image "
                  alt="background_image"
                  style={{
                     position: 'absolute',
                     zIndex: 0,
                     top: 200,
                     maxHeight: '320px',
                  }}
                  src={IntroLeft}
               />
            </div>
            <div
               className="d-flex flex-column col-md-10 my-5 justify-content-evenly align-items-baseline "
               style={{position: 'relative', zIndex: 1}}>
               <div className=" col-sm-6 pt-md-5 pt-sm-4 ms-5 mt-md-1 text-wrap align-middle me-auto d-flex flex-column">
                  <span className="hr-line my-4"></span>
                  <h1 className="welcome-header">{t('welcome_header')}</h1>
                  <p className="text-left mt-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorem dolorum a cupiditate laboriosam aliquam porro quasi
                     consectetur perspiciatis provident pariatur adipisci odit
                     voluptatem architecto
                  </p>
                  <span>
                     <button
                        className="btn btn-lg btn-primary btn-white-primary my-md-5"
                        onClick={handleClick}>
                        Ask For Call
                     </button>
                  </span>
               </div>
            </div>
         </div>

         <img
            className="welcome-image img-fluid col-md-4 col-sm-6"
            alt="welcome_image"
            src={WelcomeImage}
         />
      </div>
   );
}

export default WelcomeSection;
