import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom';
import { authSelectors } from '../../redux/auth'

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/sing_in' />
  )
};

export default PrivateRoute;