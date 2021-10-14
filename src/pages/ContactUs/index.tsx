import React from 'react';
import {FindOutMore, ContactSection} from 'components';
import ContactCard from 'components/ContactCard';

import ContactCover from '@img/contact.jpg';
import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
   faEnvelope,
   faLocationArrow,
   faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function ContactUsPage() {
   const {t} = useTranslation();
   const contactList = [
      {
         icon: faPhoneAlt,
         text: t(TextEnum.contact_info_mobile),
      },
      {
         icon: faEnvelope,
         text: t(TextEnum.contact_info_mail),
      },
      {
         icon: faLocationArrow,
         text: t(TextEnum.contact_info_location),
      },
   ];
   return (
      <>
         <div
            className="image-container d-flex"
            style={{backgroundImage: `url(${ContactCover})`}}>
            <p className="aboutus-header fs-1 fw-bold text-white mt-auto">
               {t(TextEnum.contact_cover_header)}
            </p>
         </div>
         <div className="container-fluid">
            <div className="container section">
               <div className="row section">
                  <div className="col-md-6 col-sm-12 ms-auto">
                     <p className="fs-3 text-start">
                        {t(TextEnum.contact_intro_text_right)}
                     </p>
                  </div>
               </div>

               <div className="row section">
                  <div className="col-md-6 col-sm-12">
                     {contactList.map((item) => (
                        <div className="my-5">
                           <ContactCard icon={item.icon} text={item.text} />
                        </div>
                     ))}
                  </div>
               </div>
               <div className="row ">
                  <ContactSection />
               </div>
            </div>
         </div>
      </>
   );
}

export default ContactUsPage;
