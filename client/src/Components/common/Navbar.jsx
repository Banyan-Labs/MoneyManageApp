import React, { ReactPropTypes } from 'react';

/***
 * * This is a rough concept, ideally our menu item arrays and filter func would come
 * * from another folder like commons. Also the logic is quite off but the concept would
 * *be the same. Conditional rendering and reusable.
 */

const Navbar = ({ isAuth, role }) => {
  const authMenuItems = [
    { href: 'dashboard', role: 'client' },
    { href: 'manage', role: 'admin' },
  ];
  const nonAuthMenuItem = [{ href: 'login', role: 'home' }];
  const menuItems = isAuth ? authMenuItems : nonAuthMenuItem;

  const renderItems = (menu, role) => menu.filter((item) => item.role === role);

  return (
    <nav>
      <span>Nav logo</span>
      <span>
        <ul>
          {renderItems(menuItems, role).map((item, index) => (
            <li key={index}>{item.href}</li>
          ))}
        </ul>
      </span>
    </nav>
  );
};

Navbar.propTypes = {
  isAuth: ReactPropTypes.bool.isRequired,
  role: ReactPropTypes.string.isRequired,
};

export default Navbar;
