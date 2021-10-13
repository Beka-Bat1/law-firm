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
         <FindOutMore />
      </>
   );
}

export default HomePage;
