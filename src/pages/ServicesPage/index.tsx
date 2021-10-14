import React from 'react';
import {FindOutMore} from 'components';
import {useHistory} from 'react-router-dom';

import ServicesCover from '@img/services.jpg';

import './styles.css';

function ServicesPage() {
   const history = useHistory();

   const accordionData = [
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
      },
      {
         headerLeft: 'Banking and Financial Service',
         practiceCount: 3,
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aspernatur possimus. Placeat at eveniet, veniam consequuntur, repellendus officiis magnam expedita qui provident laborum debitis commodi cupiditate alias voluptatum repudiandae quibusdam.',
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
               Our Services
            </p>
         </div>
         <div className="container-fluid">
            <div className="container section">
               <div className="row section">
                  <div className="col-6">
                     <p className="fs-3 text-start">Service</p>
                  </div>
                  <div className="col-3">
                     <p className="fs-3 text-center">Practice</p>
                  </div>
                  <div className="col-3">
                     <p className="fs-3 text-end">Open</p>
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
                                    {item.practiceCount || 0} Practices
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
                  textLeft={
                     "If you can't find what you are looking for, explore."
                  }
                  buttonText={'Find Out More'}
                  onClick={handleClick}
               />
            </div>
         </div>
      </>
   );
}

export default ServicesPage;
