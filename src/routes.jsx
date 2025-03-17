import React from 'react';
import { Routes, Route, useLocation, useMatch, Navigate} from 'react-router-dom'; // No Navigate needed
import Home from './pages/home.page';
import Login from './pages/login.page';

import Dashboard from './pages/dashboard.page';

import PendingRequirements from './pages/pending-requirements.page';
import ClosePageRequirements from './pages/closed-requirements.page';
import NewRequirements from './pages/new-requirements.page';
import DetailsRequirements from './pages/details-requirements.page.jsx';
import ClosedRequests from './pages/closed-requests.page.jsx';

import PendingRequests from './pages/pending-requests.page.jsx';
import HeaderSlideClosedRequests from './components/slide-components/header-slide-closed-requests.component.jsx';

import Themes from './pages/themes.page.jsx'
import Users from './pages/users-page.jsx'
import Notifications from './pages/notifications.page.jsx';

import HeaderSlide from './components/slide-components/header-slide.layout.jsx'
import HeaderSlideDashboard from './components/slide-components/header-slide-dashboard.component.jsx';
import HeaderSlidePendingRequirements from './components/slide-components/header-slide-pending-requirements.component.jsx';
import HeaderSlideCloseRequirements from './components/slide-components/header-slide-closed-requirements.component.jsx';
import HeaderSlidePendingRequests from './components/slide-components/header-slide-pending-requests.component.jsx';
import HeaderSlideThemes from './components/slide-components/header-slide-themes.component.jsx';
import HeaderSlideUser from './components/slide-components/header-slide-users.component.jsx';
import HeaderSlideNotifications from './components/slide-components/header-slide-notifications.component.jsx';

import NotFound from './pages/not-found.page';



function AppRouter() {
  const location = useLocation();

  return (
    <>
      {/*{location.pathname !== '/login' && location.pathname !== '/not-found' && <Header />} no se pueda ver en login y notfound*/ }
      {location.pathname == '/' && <HeaderSlide />}
      {location.pathname == '/dashboard' && <HeaderSlideDashboard />}
      {location.pathname == '/pending-requirements' && <HeaderSlidePendingRequirements />}
      {location.pathname == '/closed-requirements' && <HeaderSlideCloseRequirements />}
      {location.pathname == '/pending-requests' && <HeaderSlidePendingRequests />}
      {location.pathname == '/closed-requests' && <HeaderSlideClosedRequests />}
      {location.pathname == '/themes' && <HeaderSlideThemes />}
      {location.pathname == '/users' && <HeaderSlideUser />}
      {location.pathname == '/notifications' && <HeaderSlideNotifications />}


      {location.pathname == '/pending-requirements/new-requirements' && <HeaderSlidePendingRequirements />}


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/pending-requirements" element={<PendingRequirements />} />
        <Route path="/closed-requirements" element={<ClosePageRequirements />} />
        <Route path="/pending-requirements/new-requirements" element={<NewRequirements />} />
        <Route path="/details-requirements" element={<DetailsRequirements />} />

        <Route path="/pending-requests" element={<PendingRequests />} />
        <Route path="/closed-requests" element={<ClosedRequests />} />

        <Route path="/themes" element={<Themes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />


        <Route path="/not-found" element={<NotFound />} /> 
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default AppRouter;