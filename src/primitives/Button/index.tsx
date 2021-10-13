import React from 'react';

interface ButtonProps {
   text: string;
   onClick: () => void;
   styles?: StyleSheet;
}

function AppButton(props: ButtonProps) {
   return (
      <button
         className={'btn btn-lg btn-primary btn-white-primary my-5'}
         onClick={props.onClick}>
         {props.text}
      </button>
   );
}

export default AppButton;
