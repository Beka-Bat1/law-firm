import React from 'react';

import './styles.css';

function ContactSection() {
   return (
      <div className="contact-section container section">
         <div className="row dark-background">
            <div className="col-md-5 col-sm-5 col-xs-12 cotact-content">
               <h1 className="text-white contact-us-text">
                  We are please to contact you
               </h1>
            </div>

            <div className="col-md-7 col-sm-7 col-xs-12 contact-form p-md-5 p-sm-3">
               <div className="d-flex flex-row space-around w-100">
                  <h2 className="text-white mb-5">Contact Us</h2>

                  <button
                     className="btn btn-lg btn-primary btn-white-primary ms-auto mb-5"
                     onClick={() => console.log('pressed')}>
                     Send Query
                  </button>
               </div>

               <form className="mx-3">
                  <div className="row">
                     <input
                        type="text"
                        placeholder="name"
                        className="contact-form-input"
                     />
                  </div>

                  <div className="row">
                     <input
                        type="text"
                        placeholder="name"
                        className="contact-form-input"
                     />
                  </div>

                  <div className="row">
                     <input
                        type="text"
                        placeholder="name"
                        className="contact-form-input"
                     />
                  </div>
                  <div className="row">
                     <textarea
                        id="message"
                        name="user_message"
                        rows={4}
                        placeholder="text"
                        className="contact-form-input p-3"
                        required={true}
                        data-error="text"></textarea>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default ContactSection;
