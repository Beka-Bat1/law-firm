import React from 'react';
import {FindOutMore} from 'components';
import ContactCover from '@img/contact.jpg';
import './styles.css';

function ContactUsPage() {
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
                  <div className="col-6 ms-auto">
                     <p className="fs-3 text-start">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illum magnam itaque earum in alias, exercitationem
                        ad neque dolorum dolores placeat fuga officiis nemo qui
                        eligendi eveniet sed esse mollitia laborum.
                     </p>
                  </div>
               </div>

               <div className="row section">
                  <div className="col-12">
                     <p className="fs-4 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum sequi commodi, temporibus consequatur impedit,
                        tenetur quia eligendi sed nobis quibusdam reiciendis
                        illo ullam. Rem labore quibusdam quaerat.
                     </p>
                     <p className="fs-4 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum sequi commodi, temporibus consequatur impedit,
                        tenetur quia eligendi sed nobis quibusdam reiciendis
                        illo ullam. Rem labore quibusdam quaerat.
                     </p>
                     <p className="fs-4 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum sequi commodi, temporibus consequatur impedit,
                        tenetur quia eligendi sed nobis quibusdam reiciendis
                        illo ullam. Rem labore quibusdam quaerat.
                     </p>
                  </div>
               </div>
               <div className="row ">
                  <FindOutMore
                     textLeft={
                        "If you can't find what you are looking for, explore."
                     }
                     buttonText={'Find Out More'}
                     onClick={() => {
                        alert('Find Out');
                     }}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default ContactUsPage;
