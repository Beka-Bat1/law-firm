import React from 'react';

import AboutUsImage from '@img/aboutUs.jpg';
import {useHistory} from 'react-router';
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function AboutUsSection() {
   const history = useHistory();
   const {t} = useTranslation();

   const handleClick = () => {
      history.push('/about');
   };
   return (
      <div className="container d-flex flex-row section  ">
         <div className="container col-6 d-flex flex-column align-center justify-content-between">
            <h1 className="text-start">
               {t(TextEnum.home_about_section_header)}
            </h1>
            <p className="text-start me-5">
               {t(TextEnum.home_about_section_text)}
            </p>

            <span>
               <button
                  className="btn btn-lg btn-primary btn-colored-primary"
                  onClick={handleClick}>
                  {t(TextEnum.home_about_section_button)}
               </button>
            </span>
         </div>
         <div className="col-6">
            <img
               className="img-fluid mx-auto d-block"
               src={AboutUsImage}
               alt="about_us"
            />
         </div>
      </div>
   );
}

export default AboutUsSection;
