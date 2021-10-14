import React from 'react';
import {useHistory} from 'react-router-dom';

import {FindOutMore} from 'components';

import AboutCover from '@img/group.jpg';

import './styles.css';
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function AboutUsPage() {
   const history = useHistory();
   const {t} = useTranslation();

   const handleClick = () => {
      history.push('/contact');
   };

   return (
      <>
         <div
            className="image-container d-flex"
            style={{backgroundImage: `url(${AboutCover})`}}>
            <p className="aboutus-header fs-1 fw-bold text-white mt-auto">
               {t(TextEnum.about_cover_header)}
            </p>
         </div>
         <div className="container-fluid">
            <div className="container section">
               <div className="row section">
                  <div className="col-6 ms-auto">
                     <p className="fs-3 text-start">
                        {t(TextEnum.about_intro_text_right)}
                     </p>
                  </div>
               </div>

               <div className="row section">
                  <div className="col-12">
                     <p className="fs-4 mb-5">
                        {t(TextEnum.about_section_text_1)}
                     </p>
                     <p className="fs-4 mb-5">
                        {t(TextEnum.about_section_text_2)}
                     </p>
                     <p className="fs-4 mb-5">
                        {t(TextEnum.about_section_text_3)}
                     </p>
                  </div>
               </div>
               <div className="row ">
                  <FindOutMore
                     textLeft={t(TextEnum.about_footer_banner_header_left)}
                     buttonText={t(TextEnum.about_footer_banner_button)}
                     onClick={handleClick}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default AboutUsPage;
