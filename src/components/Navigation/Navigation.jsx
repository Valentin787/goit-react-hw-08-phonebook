import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import NavItem from './NavItem/NavItem'

import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import s from './Navigation.module.css'

const Navigation = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
  <nav className={s.container}>
      <NavItem
        key={"HomePage"}
        name={"HomePage"}
        icon={<CottageRoundedIcon/>}
        link={"/"}
        />
{isLoggedIn && <NavItem
        key={"PhoneBook"}
        name={"PhoneBook"}
        icon={<ContactPhoneIcon/>}
        link={"/phonebook"}
        />}
    </nav>
  )
}

export default Navigation