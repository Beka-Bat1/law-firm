import React from 'react';

import {Footer, NavBar} from 'components';

export interface LayoutProps {
   children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
   return (
      <>
         <div>
            <NavBar />
         </div>
         <main
            style={{
               scrollBehavior: 'smooth',
            }}>
            {props.children}
         </main>

         <div>
            <Footer />
         </div>
      </>
   );
};

export default Layout;
