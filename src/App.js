import {
  HashRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Search from "./Search.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import Details from "./Details.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import Category from "./Category.jsx";
import Explore from "./Explore.jsx";
import Layout from "./Pages/Layout/Layout.jsx";
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
import InquirySuccess from "./components/success/InquirySuccess.jsx";
import Cart from "./Cart.jsx";
import StateProvider from "./store/StateProvider.jsx";
import UserProvider from "./store/UserProvider.jsx";
import BookingSuccess from "./components/success/BookingSuccess.jsx";
import Home from "./Pages/Home/Home.jsx";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<Error />} path="/" element={<Layout />}>
        <Route index exact element={<Home />} />
        <Route path="/home" exact element={<Navigate to="/" />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
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
