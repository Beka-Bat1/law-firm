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
import {useTranslation} from 'react-i18next';
import {TextEnum} from 'constants/TextEnum';

function HomePage() {
   const history = useHistory();
   const {t} = useTranslation();

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
            textLeft={t(TextEnum.home_footer_banner_header_left)}
            buttonText={t(TextEnum.home_footer_banner_button)}
            onClick={handleClick}
         />
      </>
   );
}

export default HomePage;
