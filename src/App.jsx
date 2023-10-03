// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import $ from "jquery";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navs from "./components/Navs";
import Hero from "./components/Hero";
import HomeIntro from "./components/home/HomeIntro";
import HomeExp from "./components/home/HomeExp";
import CornerBtn from "./components/CornerBtn";

import Foot from "./components/Foot";
import OurServices from "./components/home/OurServices";
import Title from "./components/Title";

import VillaIntro from "./components/villa/VillaIntro";
import FindUs from "./components/FindUs";
import Amenities from "./components/villa/Amenities";
import RestoIntro from "./components/resto/RestoIntro";
import RestoMenu from "./components/resto/RestoMenu";
import AvCheck from "./AvCheck";
import ContactUs from "./components/contact/ContactUs";
import ExpTheBest from "./components/home/ExpTheBest";
import ExpIntro from "./components/exp/ExpIntro";


export default function App() {
  useEffect(() => {
    var navigations = $("#navigations");
    var $bookBox = $("#booking-box");
    // var $heroBoundary = $('#hero-boundary');
    var toggleMnav = $("#toggleMnav");
    var mNav = $("#mNav");
    var mNav_close = $("#mNav_close");
    // let currentHero = 0;

    toggleMnav.on("click", function () {
      navigations.removeClass("fixed");
      navigations.addClass("hidden");
      mNav.removeClass("-translate-y-[100%]");
    });

    mNav_close.on("click", () => {
      navigations.addClass("fixed");
      navigations.removeClass("hidden");
      mNav.addClass("-translate-y-[100%]");
    });

    $("#back-to-top").on("click", () => {
      $("html, body").animate({ scrollTop: 0 });
    });

    $(window).on("scroll", () => {
      var bottomPos = $(document).height() - $(window).height() - 2;
      var scrollTopValue = $(window).scrollTop();
      if (scrollTopValue >= 250) {
        navigations.addClass("bg-avocado-3");
        $bookBox.removeClass("relative");
        navigations.removeClass("bg-avocado-3/70");
        navigations.removeClass("text-dark-moss-green-1");
        navigations.addClass("text-avocado-1");
      }else {
        navigations.removeClass("bg-avocado-3");
        $bookBox.addClass("relative");
        navigations.removeClass("text-avocado-1");
        navigations.addClass("text-dark-moss-green-1");
        navigations.addClass("bg-avocado-3/70");
      }

      if (scrollTopValue > bottomPos) {
        // navigations.removeClass('fixed');
        $("#wa-btn").addClass("translate-y-[150%]");
        $("#back-to-top").removeClass("translate-x-[150%]");

        navigations.addClass("-translate-y-[100%]");
      } else {
        // navigations.addClass('fixed');
        $("#wa-btn").removeClass("translate-y-[150%]");
        $("#back-to-top").addClass("translate-x-[150%]");
     
        navigations.removeClass("-translate-y-[100%]");
      }
    });
  }, []);

  return (
    <>
      <div className="font-oak-sans">
        
          <Navs />

          <Routes>
            <Route
              path="/"
              titleHere="Home"
              element={
                <>
                  <Title titleHere="Home" />
                  <Hero bg_imgs={["hero1.jpg", "hero2.jpg"]} exp_sub={"false"} />
                  
                  <HomeIntro />
                  <HomeExp />
                  <ExpTheBest />
                  <OurServices />
                  <AvCheck />
                </>
              }
            />

            <Route
              path="/villa"
              element={
                <>
                  <Title titleHere="Villa" />
                  <Hero bg_imgs={["hero1.jpg", "bedroom3.jpg"]} exp_sub={"false"} />
                  <VillaIntro />
                  <Amenities />
                  <AvCheck />
                </>
              }
            />
            <Route
              path="/resto"
              element={
                <>
                  <Title titleHere="Resto" />
                  <Hero bg_imgs={["hero3.jpg", "hero4.jpg"]} exp_sub={"false"} />
                  <RestoIntro />
                  <RestoMenu />
                  <AvCheck />
                </>
              }
            />
            <Route
              path="/experiences"
              element={
                <>
                  <Title titleHere="Experiences" />
                  <Hero
                    bg_imgs={[
                      "aleksandra-dementeva-5JPVfX8Gnx8-unsplash-1536x1229.jpg",
                      "aleksandra-dementeva-O_B1LTxHb98-unsplash-1536x1024.jpg",
                    ]}
                    exp_sub={"true"}
                  />
                  <ExpIntro/>
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Title titleHere="Contact" />
                  <Hero bg_imgs={["hero1.jpg", "hero2.jpg"]} exp_sub={"false"} />
                  <ContactUs />
                  <AvCheck />
                </>
              }
            />
          </Routes>
        
        <FindUs />
        <Foot />
        <CornerBtn />
      </div>
    </>
  );
}
