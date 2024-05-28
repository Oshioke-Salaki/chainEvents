import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import CreateEvent from "./pages/CreateEvent";
import TicketsPage from "./pages/TicketsPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<DashboardPage />} />
          <Route path="create-event" element={<CreateEvent />} />

          <Route path="events" element={<EventsPage />} />
          <Route path="event/:eventId" element={<EventDetailsPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="community" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
