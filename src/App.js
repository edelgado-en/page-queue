import React, { useEffect } from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';

import { Routes, Route, Outlet, useLocation, Link } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import StackedList from './routes/stackedlist/stacked-list.component'

//if you are in DEV go to /login
const redirectUrl = 'https://github.com';

const isUserAuthenticated = () => {
  return true; //use existing function
}

const Redirect = () => {
  useEffect(() => {
    window.location = redirectUrl;
  }, []);

  return <h5>Redirecting...</h5>
}

const ProtectedRoute = () => {
  if (!isUserAuthenticated()) {
    return <Redirect />
  }

  return <Outlet />
}

const Login = () => {
  return <div>Login page</div>
}

const Footer = () => {
  return (
    <div className="text-center px-3 py-3 text-xs border-t border-gray-300">
        Copyright &#169; 2003-2021 MotionPoint Corporation. All Rights Reserved. -
         <Link to="/tpmv2/terms-of-use" className="text-blue-700">Terms of Use.</Link> -
         <Link to="/tmv2/privacy-policy" className="text-blue-700">Privacy Policy.</Link>
    </div>
  )
}

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* You need to have a wrapper here with a content and a footer for the footer to be sticky */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="stacked" element={<StackedList />}/>
              <Route element={<ProtectedRoute />}>
                <Route path="counter" element={<Counter />}/>
                {/* Add all your routes here */}
              </Route>
            </Route>
          </Routes>
        </div>
        { pathname !== '/login' && <Footer /> } 
      </div>
    </>
  );
}

export default App;
