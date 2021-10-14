import React from 'react';
import {
   WelcomeSection,
   ContactSection,
   WeAreDifferent,
   FindOutMore,
   AboutUsSection,
   OurServicesSection,
} from 'components';

function HomePage() {
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
            onClick={() => {
               alert('contact us');
            }}
         />
      </>
   );
}

export default HomePage;
