import { useSelector } from 'react-redux'
import { authSelectors } from 'redux/auth'
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu'


import s from './AppBar.module.css'


const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <header>
      <nav className={s.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
      <hr />
 
    </header>
  )
};

export default AppBar;
