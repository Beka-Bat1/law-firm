import React from 'react';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {ServicesCard} from 'components';
import {useHistory} from 'react-router-dom';

import BackgroundIcon from '@img/bg-pattern-intro-left-desktop.svg';
import BackgroundRight from '@img/bg-pattern-intro-right-desktop.svg';

import './styles.css';
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function OurServicesSection() {
   const history = useHistory();
   const {t} = useTranslation();

   const services = [
      {
         header: t(TextEnum.home_services_card_header_1),
         text: t(TextEnum.home_services_card_text_1),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_2),
         text: t(TextEnum.home_services_card_text_2),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_3),
         text: t(TextEnum.home_services_card_text_3),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_4),
         text: t(TextEnum.home_services_card_text_4),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_5),
         text: t(TextEnum.home_services_card_text_5),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_6),
         text: t(TextEnum.home_services_card_text_6),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_7),
         text: t(TextEnum.home_services_card_text_7),
         icon: faUniversity,
      },
      {
         header: t(TextEnum.home_services_card_header_8),
         text: t(TextEnum.home_services_card_text_8),
         icon: faUniversity,
      },
   ];

   function handleClick() {
      history.push('/services');
   }

   return (
      <div className="container section">
         <h1 className="text-center">
            {t(TextEnum.home_services_section_header)}
         </h1>
         <span className="hr-underline-pink"></span>
         <div className="container services-background my-5 pb-4 pt-2">
            <div
               className="col-md-12"
               style={{position: 'relative', zIndex: 1}}>
               <img
                  className="img-fluid services-background-img-left"
                  alt="background_image"
                  src={BackgroundIcon}
                  style={{position: 'absolute', left: -12}}
               />
               <img
                  className="img-fluid services-background-img-right"
                  alt="background_image"
                  src={BackgroundRight}
                  style={{position: 'absolute', right: -12, top: -8}}
               />
            </div>

            <div
               className="container d-flex flex-wrap justify-content-start align-items-center align-content-center"
               style={{position: 'relative', zIndex: 2, overflow: 'hidden'}}>
               {services.map((s) => (
                  <ServicesCard header={s.header} text={s.text} icon={s.icon} />
               ))}
            </div>
            <span className="d-flex align-items-center justify-content-center">
               {/* <Link to={'/services'}> */}
               <button
                  className="btn btn-lg btn-primary btn-white-primary"
                  onClick={handleClick}>
                  {t(TextEnum.home_services_section_button)}
               </button>
               {/* </Link> */}
            </span>
         </div>
      </div>
   );
}

export default OurServicesSection;
