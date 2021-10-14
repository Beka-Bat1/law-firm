import React from 'react';
import {
   WelcomeSection,
   ContactSection,
   WeAreDifferent,
   FindOutMore,
   AboutUsSection,
   OurServicesSection,
} from 'components';
import {useHistory} from 'react-router-dom';

function HomePage() {
   const history = useHistory();

   const handleClick = () => {
      history.push('/about');
   };

   return (
      <>
         <WelcomeSection />
         <WeAreDifferent />
         <AboutUsSection />
         <OurServicesSection />
         <ContactSection />
         <FindOutMore
            textLeft="Find out more about how we work"
            buttonText="Contact Us"
            onClick={handleClick}
         />
      </>
   );
}

export default HomePage;
