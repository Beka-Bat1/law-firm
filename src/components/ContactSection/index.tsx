import {TextEnum} from 'constants/TextEnum';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import './styles.css';

function ContactSection() {
   const {t} = useTranslation();

   const defaultForm = {
      name: '',
      surname: '',
      mobile: '',
      text: '',
   };

   const [form, setForm] = useState(defaultForm);

   const handleSubmit = () => {
      alert(`query submitted with mobile number:  ${form.mobile}`);
      setForm(defaultForm);
   };

   return (
      <div className="contact-section container section">
         <div className="row dark-background">
            <div className="col-md-5 col-sm-5 col-xs-12 cotact-content">
               <div className="text-trancuate me-4">
                  <h1 className="text-white contact-us-text ">
                     {t(TextEnum.home_cotnact_us_section_header_left)}
                  </h1>
               </div>
            </div>

            <div className="col-md-7 col-sm-7 col-xs-12 contact-form p-md-5 p-sm-3">
               <div className="d-flex flex-row space-around w-100">
                  <h2 className="text-white mb-5">
                     {t(TextEnum.home_cotnact_us_section_header_right)}
                  </h2>

                  <button
                     className="btn btn-lg btn-primary btn-white-primary ms-auto mb-5"
                     onClick={handleSubmit}>
                     {t(TextEnum.home_cotnact_us_section_button)}
                  </button>
               </div>

               <form className="mx-3">
                  <div className="row">
                     <input
                        type="text"
                        placeholder={t(
                           TextEnum.home_cotnact_us_section_input_1,
                        )}
                        className="contact-form-input"
                        onChange={(e) => {
                           setForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                           }));
                        }}
                        value={form.name}
                     />
                  </div>

                  <div className="row">
                     <input
                        className="contact-form-input"
                        type="text"
                        placeholder={t(
                           TextEnum.home_cotnact_us_section_input_2,
                        )}
                        onChange={(e) => {
                           setForm((prev) => ({
                              ...prev,
                              surname: e.target.value,
                           }));
                        }}
                        value={form.surname}
                     />
                  </div>

                  <div className="row">
                     <input
                        className="contact-form-input"
                        type="text"
                        placeholder={t(
                           TextEnum.home_cotnact_us_section_input_3,
                        )}
                        onChange={(e) => {
                           setForm((prev) => ({
                              ...prev,
                              mobile: e.target.value,
                           }));
                        }}
                        value={form.mobile}
                     />
                  </div>
                  <div className="row">
                     <textarea
                        className="contact-form-input p-3"
                        id="message"
                        name="user_message"
                        rows={4}
                        placeholder={t(
                           TextEnum.home_cotnact_us_section_input_4,
                        )}
                        required={true}
                        data-error="text"
                        onChange={(e) => {
                           setForm((prev) => ({
                              ...prev,
                              text: e.target.value,
                           }));
                        }}
                        value={form.text}
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default ContactSection;
