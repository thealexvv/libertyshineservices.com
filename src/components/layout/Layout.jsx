import React from 'react';

const Layout = ({ children, outerDivClasses, innerDivClasses }) => {
  return (
    <>
      <div className={outerDivClasses}>
        <div className={innerDivClasses}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
