import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive 
          ? "font-semibold text-base leading-6 text-center text-primary-500 transition-colors duration-200 max-md:text-sm" 
          : "font-medium text-base leading-6 text-center text-primary transition-colors duration-200 hover:text-primary-500 max-md:text-sm"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
