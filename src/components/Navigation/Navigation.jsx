import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import NavItem from './NavItem/NavItem'
import { ThemeContext } from 'components/context/themeContext';
import { useTranslation } from 'react-i18next';

import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
{isLoggedIn && <> <NavItem
        key={"PhoneBook"}
        name={t("userMenu.phonebook")}
        icon={<ContactPhoneIcon/>}
        link={"/phonebook"}
      />
      <NavItem
        key={"Clock"}
        name={t("userMenu.clock")}
        icon={<AccessTimeFilledSharpIcon/>}
        link={"/clock"}
        />
        <NavItem
        key={"Calendar"}
        name={t("userMenu.calendar")}
        icon={<CalendarMonthIcon/>}
        link={"/calendar"}
        />
        </>}
    </nav>
  )
}

export default Navigation