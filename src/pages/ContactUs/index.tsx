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

function ContactUsPage() {
   const contactList = [
      {
         icon: faPhoneAlt,
         text: '+555 555 555 555',
      },
      {
         icon: faEnvelope,
         text: 'example@gmail.com',
      },
      {
         icon: faLocationArrow,
         text: 'Tbilisi, Georgia',
      },
   ];
   return (
      <>
         <div
            className="image-container d-flex"
            style={{backgroundImage: `url(${ContactCover})`}}>
            <p className="aboutus-header fs-1 fw-bold text-white mt-auto">
               Contact Us
            </p>
         </div>
         <div className="container-fluid">
            <div className="container section">
               <div className="row section">
                  <div className="col-md-6 col-sm-12 ms-auto">
                     <p className="fs-3 text-start">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illum magnam itaque earum in alias, exercitationem
                        ad neque dolorum dolores placeat fuga officiis nemo qui
                        eligendi eveniet sed esse mollitia laborum.
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
