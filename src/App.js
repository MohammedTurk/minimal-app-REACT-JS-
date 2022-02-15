import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const Navbar = lazy(() => import("./components/navbar/Navbar.jsx"));
const Footer = lazy(() => import("./components/footer/MainFooter"));
const Profile = lazy(() => import("./pages/Profile.js"));
const UserAccount = lazy(() => import("./pages/UserAccount"));
const Events = lazy(() => import("./pages/Events"));
const Groups = lazy(() => import("./pages/Groups"));
const Club = lazy(() => import("./pages/Club"));
const Event = lazy(() => import("./components/event/Event"));
const EventStatistics = lazy(() =>
  import("./components/event/statistics/EventStatistics.jsx")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span> </span>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Navigate to="/events" />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/account" element={<UserAccount />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/event_:id" element={<Event />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/chat/new" element={<Club />} />
          <Route path="/club/chat/:conversationKey" element={<Club />} />
          <Route
            path="/events/event_:id/statistics"
            element={<EventStatistics />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<span> </span>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
