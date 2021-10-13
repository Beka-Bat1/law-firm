import React from 'react';
import './styles.css';

interface InfoCardProps {
   header: string;
   text: string;
   icon: string;
}

function InfoCard({header = '', text = '', icon = ''}: InfoCardProps) {
   return (
      <div className="d-flex flex-column justify-content-evenly">
         <img className="img-fluid me-auto mb-2" alt="icon" src={icon} />

         <text className="info-card-header fs-2 mb-1">{header}</text>

         <text className="info-card-text my-2">{text}</text>
      </div>
   );
}

export default InfoCard;
