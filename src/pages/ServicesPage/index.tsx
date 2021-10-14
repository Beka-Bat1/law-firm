import React from 'react';
import {FindOutMore} from 'components';
import {useHistory} from 'react-router-dom';

import ServicesCover from '@img/services.jpg';

import './styles.css';
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function ServicesPage() {
   const history = useHistory();
   const {t} = useTranslation();

   const accordionData = [
      {
         headerLeft: t(TextEnum.services_acordion_header_left_1),
         practiceCount: t(TextEnum.services_acordion_practise_count_1),
         practiceText: t(TextEnum.services_acordion_practise_name_1),
         text: t(TextEnum.services_acordion_practise_text_1),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_2),
         practiceCount: t(TextEnum.services_acordion_practise_count_2),
         practiceText: t(TextEnum.services_acordion_practise_name_2),
         text: t(TextEnum.services_acordion_practise_text_2),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_3),
         practiceCount: t(TextEnum.services_acordion_practise_count_3),
         practiceText: t(TextEnum.services_acordion_practise_name_3),
         text: t(TextEnum.services_acordion_practise_text_3),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_4),
         practiceCount: t(TextEnum.services_acordion_practise_count_4),
         practiceText: t(TextEnum.services_acordion_practise_name_4),
         text: t(TextEnum.services_acordion_practise_text_4),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_5),
         practiceCount: t(TextEnum.services_acordion_practise_count_5),
         practiceText: t(TextEnum.services_acordion_practise_name_5),
         text: t(TextEnum.services_acordion_practise_text_5),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_6),
         practiceCount: t(TextEnum.services_acordion_practise_count_6),
         practiceText: t(TextEnum.services_acordion_practise_name_6),
         text: t(TextEnum.services_acordion_practise_text_6),
      },
      {
         headerLeft: t(TextEnum.services_acordion_header_left_7),
         practiceCount: t(TextEnum.services_acordion_practise_count_7),
         practiceText: t(TextEnum.services_acordion_practise_name_7),
         text: t(TextEnum.services_acordion_practise_text_7),
      },
   ];

   const handleClick = () => {
      history.push('/contact');
   };

   return (
      <>
         <div
            className="image-container d-flex"
            style={{backgroundImage: `url(${ServicesCover})`}}>
            <p className="aboutus-header fs-1 fw-bold text-white mt-auto">
               {t(TextEnum.services_cover_header)}
            </p>
         </div>
         <div className="container-fluid">
            <div className="container section">
               <div className="row section">
                  <div className="col-6">
                     <p className="fs-3 text-start">
                        {' '}
                        {t(TextEnum.services_row_header_1)}
                     </p>
                  </div>
                  <div className="col-3">
                     <p className="fs-3 text-center">
                        {' '}
                        {t(TextEnum.services_row_header_2)}
                     </p>
                  </div>
                  <div className="col-3">
                     <p className="fs-3 text-end">
                        {' '}
                        {t(TextEnum.services_row_header_3)}
                     </p>
                  </div>
               </div>
            </div>

            <div className="container-fluid">
               <div
                  className="accordion accordion-flush"
                  id="servicesAccordion">
                  {accordionData.map((item, index) => (
                     <div
                        className="accordion-item accordion-header container"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        style={{cursor: 'pointer'}}>
                        <div className="container">
                           <div className="row mt-4">
                              <div className="col-6 p-0">
                                 <p className="fs-4 ">{item.headerLeft}</p>
                              </div>
                              <div className="col-3">
                                 <p className="fs-4 text-center">
                                    {item.practiceCount || 0}{' '}
                                    {item.practiceText}
                                 </p>
                              </div>
                              <div className="col-3">
                                 <button
                                    className="accordion-button collapsed caret-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse${index}`}
                                    style={{
                                       boxShadow: 'none',
                                       background: 'none',
                                       color: 'black',
                                       border: 'none',
                                       font: 'inherit',
                                       cursor: 'pointer',
                                       outline: 'inherit',
                                       textUnderlineOffset: 'false',
                                       marginLeft: '1em',
                                    }}
                                 />
                              </div>
                           </div>
                        </div>
                        <div
                           id={`flush-collapse${index}`}
                           className="accordion-collapse collapse"
                           aria-labelledby={`flush-heading${index}`}
                           data-bs-parent="#servicesAccordion">
                           <div className="accordion-body my-4">
                              <p className="fs-5">{item.text}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="container section">
               <FindOutMore
                  textLeft={t(TextEnum.services_footer_banner_header_left)}
                  buttonText={t(TextEnum.services_footer_banner_button)}
                  onClick={handleClick}
               />
            </div>
         </div>
      </>
   );
}

export default ServicesPage;
