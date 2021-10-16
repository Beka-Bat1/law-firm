import React from 'react';

import './styles.css';
import InfoCard from 'components/InfoCard';

import SnappyIcon from '@img/icon-snappy-process.svg';
import AffordableIcon from '@img/icon-affordable-prices.svg';
import PeopleIcon from '@img/icon-people-first.svg';
import {TextEnum} from 'constants/TextEnum';
import {useTranslation} from 'react-i18next';

function WeAreDifferent() {
   const {t} = useTranslation();

   const info = [
      {
         header: t(TextEnum.home_intro_card_header_1),
         text: t(TextEnum.home_intro_card_text_1),
         icon: SnappyIcon,
      },
      {
         header: t(TextEnum.home_intro_card_header_2),
         text: t(TextEnum.home_intro_card_text_2),
         icon: AffordableIcon,
      },
      {
         header: t(TextEnum.home_intro_card_header_3),
         text: t(TextEnum.home_intro_card_text_3),
         icon: PeopleIcon,
      },
   ];

   return (
      <div className="container section">
         <div className="py-5">
            <div className=" col-sm-5 my-4 text-wrap align-middle d-flex flex-column">
               <span className="hr-line-pink my-3"></span>
               <h1 className="welcome-header">
                  {t(TextEnum.home_intro_header)}
               </h1>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between flex-nowrap ">
               {info.map((i) => (
                  <div className="mx-2">
                     <InfoCard header={i.header} text={i.text} icon={i.icon} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default WeAreDifferent;
