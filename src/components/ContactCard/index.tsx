import React from 'react';

import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './styles.css';
import {ColorList} from 'constants/ColorList';

interface Props {
   text: string;
   icon: IconProp;
}

function ContactCard({text = '', icon}: Props) {
   return (
      <div className="d-flex flex-row justify-content-between">
         {!!icon && (
            <div className="contact-icon-wrapper d-flex justify-content-center align-items-center">
               <FontAwesomeIcon icon={icon} size="2x" color={ColorList.White} />
            </div>
         )}

         <p className="info-card-text fs-3 my-2">{text}</p>
      </div>
   );
}

export default ContactCard;
