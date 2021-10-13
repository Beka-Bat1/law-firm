import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import AboutUsPage from 'pages/AboutUsPage';

function App() {
   return (
      <Layout>
         <Switch>
            <Route path="/about" component={AboutUsPage} />
            <Route path="/" component={HomePage} />
         </Switch>
      </Layout>
   );
}

export default App;
