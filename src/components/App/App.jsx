import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import  AppBar  from 'components/AppBar';
import  HomePage  from 'pages/HomePage';
import Loader from '../common/Loader';

import PrivateRoute from 'components/UserMenu/PrivateRoute';
import PublicRoute from 'components/UserMenu/PublicRoute';

import { loadingSelector } from '../../redux/phoneBook/phonebook-selectors';
import { authSelectors, authOperations } from '../../redux/auth';


import s from './App.module.css';



const SingInPageLazy = lazy(() => import('../../pages/auth/SingInPage'));
const RegisterLazy = lazy(() => import('../../pages/auth/Register'));
const ContactsPageLazy = lazy(() => import('../../pages/ContactsPage'));
const NotFoundPageLazy = lazy(() => import('../../pages/NotFoundPage'));


const App = () => {

  const loading = useSelector(loadingSelector);
  const fetchloading = useSelector(authSelectors.loadingFetchSelector);

  const dispatch = useDispatch();


  //GET_CURRENT_USER

  useEffect(() => {
    
    dispatch(authOperations.fetchUser())  
    
  }, [dispatch])
  
  return (
    <div className={s.app}>
{loading && <Loader loading={loading} />}
      
      {!fetchloading &&
        <>
          <AppBar />
          <Routes>

            <Route
              exact
              path="/"
              element={<HomePage />}>
            </Route>
            {/* //////////////////////// */}
            <Route element={
              <PublicRoute />}>

              <Route
                exact
                path="/register"
                element={
                  <Suspense fallback={<Loader />}>
                    <RegisterLazy />
                  </Suspense>}
              />

              <Route
                exact
                path="/sing_in"
                element={
                  <Suspense fallback={<Loader />}>
                    <SingInPageLazy />
                  </Suspense>}
            />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loader/>}>
                    <NotFoundPageLazy />
                  </Suspense>
                }
              />
          </Route>
          

          
            {/* //////////////////////// */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/phonebook"
                element={
                  <Suspense fallback={<Loader />}>
                    <ContactsPageLazy />
                  </Suspense>}
              />
          </Route>

          </Routes>
        </>}
  </div>
  );
};

export default App;


