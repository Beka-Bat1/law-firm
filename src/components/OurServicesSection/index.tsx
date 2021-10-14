import React from 'react';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {ServicesCard} from 'components';
import {useHistory} from 'react-router-dom';

import BackgroundIcon from '@img/bg-pattern-intro-left-desktop.svg';
import BackgroundRight from '@img/bg-pattern-intro-right-desktop.svg';

import './styles.css';

function OurServicesSection() {
   const history = useHistory();

   const services = [
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit asdasdasdasdasdasdasdasdasdasdasssssssssssssssssssssssssssssssss.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit. asdjnbsadjnnjkansdkjnajsndkjaskjdblkabjsdkjasb; ajsbf;jdsbf;kjsdbfkjbsdkfjbsdkfjbdksjfkjb',
         icon: faUniversity,
      },
      {
         header: 'Services header',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit velit.',
         icon: faUniversity,
      },
   ];

   function handleClick() {
      history.push('/services');
   }

   return (
      <div className="container section">
         <h1 className="text-center">Our Services</h1>
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
                  See More
               </button>
               {/* </Link> */}
            </span>
         </div>
      </div>
   );
}

export default OurServicesSection;
