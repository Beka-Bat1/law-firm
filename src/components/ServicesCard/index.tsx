import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import './styles.css';

interface ServicesCardProps {
   icon: IconProp;
   header: string;
   text: string;
}

function ServicesCard(props: ServicesCardProps) {
   const {icon = '', header = '', text = ''} = props;

   return (
      <div className="col-md-4 col-sm-6 col-xs-12 p-4 text-truncate">
         <div className="col-12 services-card flex-column text-white p-4 text-wrap text-truncate">
            <p className="text-center fs-3 fw-bolder text-wrap">{header}</p>
            <div className="d-flex flex-md-row">
               <div className="d-flex justify-content-center align-items-center">
                  {!!icon && <FontAwesomeIcon icon={icon} size="4x" />}
               </div>

               <span className="d-inline-block text-truncate text-center text-wrap ms-3">
                  {text}
               </span>
            </div>
         </div>
      </div>
   );
}

export default ServicesCard;
