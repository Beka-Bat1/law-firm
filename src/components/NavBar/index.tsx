import React from 'react';
import {Link} from 'react-router-dom';
import i18next from 'i18n/i18n';

import {LanguageEnum} from 'constants/languages';
import {Form} from 'react-bootstrap';

import Logo from '@img/logo.svg';

const NavBar = () => {
   const translationHandler = (languageName: LanguageEnum) => {
      i18next.changeLanguage(languageName);
   };

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid mx-5">
            <Link className="navbar-brand" href="#" to={'/'}>
               <img src={Logo} className="image" alt="logo_image" />
            </Link>

            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                     <Link className="nav-link" href="#" to={'/'}>
                        მთავარი
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#" to={'/about'}>
                        ჩვენს შესახებ
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#" to={'/services'}>
                        სერვისები
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#" to={'/contact'}>
                        კონტაქტი
                     </Link>
                  </li>
                  <li className="nav-item my-2 me-auto">
                     <Form.Select
                        size="sm"
                        aria-label="Default select example"
                        data-width="fit"
                        className="langage-form"
                        onChange={(e) => {
                           let value: LanguageEnum = (
                              e.target as HTMLInputElement
                           ).value as LanguageEnum;
                           console.log(value);
                           translationHandler(value!);
                        }}>
                        <option>language</option>
                        <option value={LanguageEnum.Georgian}> Georgian</option>
                        <option value={LanguageEnum.English}>English</option>
                        <option value={LanguageEnum.Russian}>Russian</option>
                     </Form.Select>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
