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

import Themes from './pages/themes.page.jsx'
import Users from './pages/users-page.jsx'
import Notifications from './pages/notifications.page.jsx';

import SlideLayout from './layouts/slide-components/slide.layout.jsx';
import SlideDashboard from './layouts/slide-components/slide-dashboard.layout.jsx';
import SlidePendingRequirements from './layouts/slide-components/slide-pending-requirements.layout.jsx';
import SlideCloseRequirements from './layouts/slide-components/slide-closed-requirements.layout.jsx';
import SlidePendingRequests from './layouts/slide-components/slide-pending-requests.layout.jsx';
import SlideCloseRequests from './layouts/slide-components/slide-closed-requests.layout.jsx';
import SlideThemes from './layouts/slide-components/slide-themes.layout.jsx';
import SlideUser from './layouts/slide-components/slide-users.layout.jsx';
import SlideNotifications from './layouts/slide-components/slide-notifications.layout.jsx';

import NotFound from './pages/not-found.page';



function AppRouter() {
  const location = useLocation();

  return (
    <>
      {/*{location.pathname !== '/login' && location.pathname !== '/not-found' && <Header />} no se pueda ver en login y notfound*/ }
      {location.pathname == '/' && <SlideLayout />}
      {location.pathname == '/dashboard' && <SlideDashboard />}
      {location.pathname == '/pending-requirements' && <SlidePendingRequirements />}
      {location.pathname == '/closed-requirements' && <SlideCloseRequirements />}
      {location.pathname == '/pending-requests' && <SlidePendingRequests />}
      {location.pathname == '/closed-requests' && <SlideCloseRequests />}
      {location.pathname == '/themes' && <SlideThemes />}
      {location.pathname == '/users' && <SlideUser />}
      {location.pathname == '/notifications' && <SlideNotifications />}


      {location.pathname == '/pending-requirements/new-requirements' && <SlidePendingRequirements />}


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