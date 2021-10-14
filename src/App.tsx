import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import AboutUsPage from 'pages/AboutUsPage';
import ServicesPage from 'pages/ServicesPage';
import ContactUsPage from 'pages/ContactUs';

function App() {
   return (
      <Layout>
         <Switch>
            <Route path="/about" component={AboutUsPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/contact" component={ContactUsPage} />
            <Route path="/" component={HomePage} />
         </Switch>
      </Layout>
   );
}

export default App;
