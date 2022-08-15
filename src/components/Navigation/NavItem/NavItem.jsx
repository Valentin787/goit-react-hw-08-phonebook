import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./NavItem.module.css";

const NavItem = ({ name, icon, link }) => {

  return (
    <div className={s.NavItem}>
      <span className={s.iconWrapper}>
       
        <NavLink
          to={link}
          className={s.itemName}
          activeclassname={s.NavItemActive}
        >
          {name}
          <span className={s.span}>{icon}</span>
          
        </NavLink>
        
      </span>
    </div>
  );
}
NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;