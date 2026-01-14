import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import City from "./pages/City";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminAddEvent from "./pages/AdminAddEvent";
import AdminEvents from "./pages/AdminEvents";
import AdminAddCity from "./pages/AdminAddCity";
import BookingSuccess from "./pages/BookingSuccess";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/listings/:cityId/:type" element={<Listings />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/add-event" element={<AdminAddEvent />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/add-city" element={<AdminAddCity />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}


