import {
  HashRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home.jsx";
import Search from "./Search.jsx";
import SignUp from "./Pages/AuthPages/SignUp.jsx";
import Details from "./Details.jsx";
import SignIn from "./Pages/AuthPages/SignIn.jsx";
import Category from "./Category.jsx";
import Explore from "./Explore.jsx";
import Layout from "./Layout.jsx";
import BookTour from "./BookTour.jsx";
import Hotel from "./Hotel.jsx";
import Cab from "./Cab.jsx";
import Inquiry from "./Inquiry.jsx";
import React, { useState } from "react";
import Activate from "./Activate.jsx";
import ValidateOtp from "./ValidateOtp.jsx";
import Error from "./Error.jsx";
import Packages from "./Packages.jsx";
import PackageDetail from "./PackageDetail.jsx";
import HotelDetail from "./HotelDetail.jsx";
import BookingSuccess from "./BookingSuccess.jsx";
import InquirySuccess from "./InquirySuccess.jsx";
import Cart from "./Cart.jsx";
import StateProvider from "./store/StateProvider.jsx";
import UserProvider from "./store/UserProvider.jsx";

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        errorElement={<Error />}
        path="/"
        element={<Layout user={user} setUser={setUser} />}
      >
        <Route index exact element={<Home />} />
        <Route path="/home" exact element={<Navigate to="/" />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/tour/:id" element={<Details />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/book/:tourId" element={<BookTour />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/contact" element={<Inquiry />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/verify" element={<ValidateOtp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/inquirysuccess" element={<InquirySuccess />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <StateProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </StateProvider>
    </>
  );
}
