import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/logo.png";
import NavItem from "../../common/NavItem/NavItem";

const AppNavigation = ({ className = "" }) => {
  return (
    <header className={`grid fixed top-0 left-0 grid-cols-3 items-center px-16 py-6 w-full border-b bg-neutral-100 border-neutral-50 z-[100] ${className}`}>
      <div className="justify-self-start">
        <NavLink to="/" className="transition-opacity duration-200 hover:opacity-80">
          <img
            src={logoImage}
            alt="Campers"
            className="h-4 w-auto object-contain block max-md:h-[14px]"
          />
        </NavLink>
      </div>
      <nav className="flex gap-8 justify-self-center">
        <NavItem to="/">
          Home
        </NavItem>
        <NavItem to="/catalog">
          Catalog
        </NavItem>
      </nav>
    </header>
  );
};

export default AppNavigation;
