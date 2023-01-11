import React, { ReactPropTypes } from 'react';

/**
 * @param {children}
 * @returns HTML Node or collection of HTML Nodes
 ** by using the React.Fragment component we are able to pass down a single child
 ** or a collection of children with out the need for an array.
 ** This component can be used as a wrapper for pages sharing the same layout.
 ** Utilizing styles and common components, such as a Navbar and Footer
 */

const FrontPageLayout = ({ children }) => {
  return (
    <div>
      <>{children}</>
    </div>
  );
};

FrontPageLayout.propTypes = {
  children: ReactPropTypes.node,
};

export default FrontPageLayout;
