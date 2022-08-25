import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import NavItem from './NavItem/NavItem'
import { ThemeContext } from 'components/context/themeContext';
import { useTranslation } from 'react-i18next';

import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import s from './Navigation.module.css'




const Navigation = () => {

  const { theme } = useContext(ThemeContext);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { t } = useTranslation();


  return (
  <nav className={s.container}>
      <NavItem
        key={"HomePage"}
        name={ t("userMenu.homepage")}
        icon={<CottageRoundedIcon/>}
        link={"/"}
        />
{isLoggedIn && <NavItem
        key={"PhoneBook"}
        name={t("userMenu.phonebook")}
        icon={<ContactPhoneIcon/>}
        link={"/phonebook"}
        />}
    </nav>
  )
}

export default Navigation