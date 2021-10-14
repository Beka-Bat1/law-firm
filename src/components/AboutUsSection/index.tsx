import React from 'react';

import AboutUsImage from '@img/aboutUs.jpg';
import {useHistory} from 'react-router';

function AboutUsSection() {
   const history = useHistory();

   const handleClick = () => {
      history.push('/about');
   };
   return (
      <div className="container d-flex flex-row section  ">
         <div className="container col-6 d-flex flex-column align-center justify-content-between">
            <h1 className="text-start">About Us</h1>
            <p className="text-start me-5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dignissimos eos dicta ipsam at maiores minus, a ipsa! Voluptatem,
               sit porro veritatis harum sequi molestias facere eaque quo
               laborum inventore at? Lorem ipsum dolor sit amet consectetur.
            </p>

            <span>
               <button
                  className="btn btn-lg btn-primary btn-colored-primary"
                  onClick={handleClick}>
                  Find Out
               </button>
            </span>
         </div>
         <div className="col-6">
            <img
               className="img-fluid mx-auto d-block"
               src={AboutUsImage}
               alt="about_us"
            />
         </div>
      </div>
   );
}

export default AboutUsSection;
