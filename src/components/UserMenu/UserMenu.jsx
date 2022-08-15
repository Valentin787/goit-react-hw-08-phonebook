import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './UserMenu.module.css'


const UserMenu = () => {

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.itemName}>
        Welcome,{name}
        <span className={s.span}>
          <AccountCircleSharpIcon />
        </span>
      </span>
      <button
        className={s.btn}
        type='button'
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span className={s.btnText}>Out</span>
        <span className={s.spanOut}> <LogoutIcon /></span>
        
      </button>
    </div>
  )
}

export default UserMenu;