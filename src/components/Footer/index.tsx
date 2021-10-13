import React from 'react';
import {Link} from 'react-router-dom';
import {
   faFacebook,
   faInstagram,
   faLinkedinIn,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Logo from '@img/logo.svg';
import BackgroundPattern from '@img/bg-pattern-footer-desktop.svg';

function Footer() {
   const routes = {
      social: [
         {
            icon: faFacebook,
            link: '',
         },
         {
            icon: faInstagram,
            link: '',
         },
         {
            icon: faLinkedinIn,
            link: '',
         },
         {
            icon: faTwitter,
            link: '',
         },
      ],
      ourCompany: [
         {
            title: 'reviews',
            link: '',
         },
         {
            title: 'how we work',
            link: '',
         },
         {
            title: 'why us?',
            link: '',
         },
         {
            title: 'view plans',
            link: '',
         },
      ],

      helpMe: [
         {
            title: 'faq',
            link: '',
         },
         {
            titile: 'terms of use',
            link: '',
         },
         {
            title: 'privacy policy',
            link: '',
         },
         {
            title: 'cookies',
            link: '',
         },
      ],
      contact: [
         {
            title: 'sales',
            link: '',
         },
         {
            title: 'support',
            link: '',
         },
         {
            title: 'live chat',
            link: '',
         },
      ],
      others: [
         {
            title: 'careers',
            link: '',
         },
         {
            title: 'press',
            link: '',
         },
         {
            title: 'licenses',
            link: '',
         },
      ],
   };

   return (
      <footer
         className="text-center text-dark"
         style={{backgroundColor: '#FAFAFA'}}>
         {/* <!-- Grid container --> */}
         <div style={{position: 'relative', zIndex: 0}}>
            <img
               className="findout-background-image img-fluid"
               alt="background_image"
               src={BackgroundPattern}
               style={{position: 'absolute', left: 0}}
            />
         </div>

         <div
            className="container p-4"
            style={{position: 'relative', zIndex: 2}}>
            {/* background*/}

            {/* top footer */}

            <div
               className="footer-header-underline container d-flex justify-content-between mb-5"
               style={{
                  borderBottom: '1px solid #C1C1C1',
               }}>
               <div>
                  <Link className="navbar-brand" href="#" to={'/'}>
                     <img src={Logo} className="image" alt="logo_image" />
                  </Link>
               </div>

               {/* <!-- Section: Social media --> */}
               <section className="mb-4">
                  {routes.social.map(({icon, link}) => (
                     <Link
                        className="btn btn-outline-dark  btn-floating shadow-none  m-1"
                        style={{outline: 'none', border: 'none'}}
                        role="button"
                        to={link}>
                        <FontAwesomeIcon icon={icon} size="lg" />
                     </Link>
                  ))}
               </section>
               {/* <!-- Section: Social media --> */}
            </div>

            {/* <!-- Section: Links --> */}
            <section className="">
               {/* <!--Grid row--> */}
               <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                     <h5 className="text-uppercase">Our Company</h5>
                     <ul className="list-unstyled mb-0">
                        {routes.ourCompany.map(({title, link}) => (
                           <li>
                              <Link
                                 className="link-tag text-uppercase link-secondary text-decoration-none"
                                 to={link}
                                 style={{}}>
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                     <h5 className="text-uppercase">help me</h5>

                     <ul className="list-unstyled mb-0">
                        {routes.helpMe.map(({title, link}) => (
                           <li>
                              <Link
                                 className="link-tag text-uppercase link-secondary text-decoration-none"
                                 to={link}
                                 style={{}}>
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-sm-2">
                     <h5 className="text-uppercase">contact</h5>

                     <ul className="list-unstyled mb-0">
                        {routes.contact.map(({title, link}) => (
                           <li>
                              <Link
                                 className="link-tag text-uppercase link-secondary text-decoration-none"
                                 to={link}
                                 style={{}}>
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-sm-2">
                     <h5 className="text-uppercase">others</h5>

                     <ul className="list-unstyled mb-0">
                        {routes.others.map(({title, link}) => (
                           <li>
                              <Link
                                 className="link-tag text-uppercase link-secondary text-decoration-none"
                                 to={link}
                                 style={{}}>
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* <!--Grid column--> */}
               </div>
               {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
         </div>
         {/* <!-- Grid container --> */}

         {/* <!-- Copyright --> */}
         <div
            className="text-center p-3"
            style={{backgroundColor: 'rgb(238 238 238)'}}>
            © 2021 Copyright:{' '}
            <Link
               className=""
               href="https://www.linkedin.com/in/beka-batmanashvili-a09b44203/"
               to={''}>
               B.B.
            </Link>
         </div>
         {/* <!-- Copyright --> */}
      </footer>
   );
}

export default Footer;
