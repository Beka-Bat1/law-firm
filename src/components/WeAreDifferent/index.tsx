import React from 'react';

import './styles.css';
import InfoCard from 'components/InfoCard';

import SnappyIcon from '@img/icon-snappy-process.svg';
import AffordableIcon from '@img/icon-affordable-prices.svg';
import PeopleIcon from '@img/icon-people-first.svg';

function WeAreDifferent() {
   const info = [
      {
         header: 'Snappy Process',
         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta quasi similique nam ducimus suscipit quis voluptatem alias',
         icon: SnappyIcon,
      },
      {
         header: 'Affordable prices',
         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta quasi similique nam ducimus suscipit quis voluptatem alias',
         icon: AffordableIcon,
      },
      {
         header: 'People First',
         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta quasi similique nam ducimus suscipit quis voluptatem alias',
         icon: PeopleIcon,
      },
   ];

   return (
      <div className="container section">
         <div className="py-5">
            <div className=" col-sm-5 my-4 text-wrap align-middle d-flex flex-column">
               <span className="hr-line-pink my-3"></span>
               <h1 className="welcome-header">We are Different</h1>
            </div>

            <div className="d-flex justify-content-between flex-nowrap ">
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
