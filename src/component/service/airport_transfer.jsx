import React, { useState } from "react";
import HeroBanner from "../../assets/herobanner.jpg";

import {
  Car,

  Shield,
  CheckCircle,
  Plane,
  Users,
  MapPin,
  Snowflake,
  Star,
  Headphones,
  Briefcase,
  Globe,
  Zap,
} from 'lucide-react';
import Airports from '../../assets/airport.png';
import Vector from '../../assets/vector.png';
import Airport2 from '../../assets/airport2.png'
import Hours from '../../assets/24.png';
import Tracking from '../../assets/tracking.png';
import Group from '../../assets/group.png';
import Taxi from '../../assets/taxi.png';
import Network from '../../assets/network.png';
import Hardworking from '../../assets/hardworking.png';
import Thumb from '../../assets/thumb.png';
import Clock from '../../assets/clock.png';
import Plus1 from '../../assets/plus1.png';
import Security from '../../assets/security.png';
import Airporticon from '../../assets/airporticon.png';
import Cargo from '../../assets/cargo.png';
import Changes from '../../assets/changes.png';
import {  DollarSign, TrendingUp, Handshake, HeartHandshake } from 'lucide-react';
export const Airport = () => {


  return (
    <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
      {/* HERO SECTION */}
    



      {/* CONTENT */}
      <div className="max-w-[86rem] mx-auto px-6 ">
        {/* Intro Section */}
        <div className=" mb-12">
          <p className="text-[#273270]  text-[19px]">
        In today’s fast-paced corporate world, time, reliability, and image are everything. Whether it’s ensuring a senior executive reaches a critical board meeting, welcoming an international guest, or guaranteeing that your employees never miss a flight, transportation must go beyond convenience. It must deliver professionalism, comfort, and dependability at every step.
          </p>
          <br />
          <p className="text-[#273270]  text-[19px]">
        At Viyagoo, we bring together the best of chauffeur-driven executive travel and seamless airport transfer services under one umbrella — creating a future-ready mobility solution that organizations can rely on.
          </p>
          
        </div>

        
      


      


        
       
      </div>
      <div className="min-h-screen   px-4 sm:px-6 lg:px-8">
        <div className="max-w-[83rem] mx-auto">

          {/* Header Section */}
          <div className=" mb-16">
            <h1 className="text-4xl font-bold text-[#273270] -mb-9">
              Why Executive & Airport Mobility Matters
            </h1>
          </div>

          {/* 5 Reasons Grid */}
          {/* 5-Card Grid – 3 on top, 2 centered below */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
  {/* ==== ROW 1 ==== */}
  {/* Card 1 */}
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md" style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}>
    <h3 className="text-[31px] font-semibold text-[#273270] mb-2">01.</h3>
    <p className="text-[#273270] text-sm">
      <strong>First Impressions Count –</strong> The way your business moves clients, leaders, and guests reflects directly on your brand image.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md" style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}>
    <h3 className="text-[31px] font-semibold text-[#273270] mb-2">02.</h3>
    <p className="text-[#273270] text-sm">
      <strong>Time is Productivity –</strong> Chauffeur-driven cars allow executives to work on the go while airport transfers save valuable minutes during tight schedules.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md" style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}>
    <h3 className="text-[31px] font-semibold text-[#273270] mb-2">03.</h3>
    <p className="text-[#273270] text-sm">
      <strong>Stress-Free Travel –</strong> No more worrying about traffic, last-minute cabs, or missed flights.
    </p>
  </div>

  {/* ==== ROW 2 ==== */}
  {/* Empty space left side (for centering) */}
  <div className="hidden lg:block"></div>

  {/* Card 4 */}
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md" style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}>
    <h3 className="text-[31px] font-semibold text-[#273270] mb-2">04.</h3>
    <p className="text-[#273270] text-sm">
      <strong>Safety & Reliability –</strong> Professionally trained chauffeurs and verified vehicles ensure security, comfort, and punctuality.
    </p>
  </div>

  {/* Card 5 */}
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md" style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}>
    <h3 className="text-[31px] font-semibold text-[#273270] mb-2">05.</h3>
    <p className="text-[#273270] text-sm">
      <strong>Round-the-Clock Operations –</strong> Business doesn’t stop, and neither do we — our services run 24/7, 365 days a year.
    </p>
  </div>

  {/* Empty space right side (for centering) */}
  <div className="hidden lg:block"></div>
</div>


          {/* Main Services Section */}
          <h2 className="text-3xl font-bold text-[#273270]  mb-12">
            Our Chauffeur & Airport Transfer Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Image */}
            <div className="relative">
              <img
                src={Airports}
                alt="Executive being greeted by chauffeur"
                className="rounded-[2rem] shadow-lg w-full object-cover h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem]"></div>
            </div>

            {/* Right: Chauffeur-Driven Executive Travel */}
            <div>
              <h3 className="text-2xl font-bold text-[#273270] mb-13">
                Chauffeur-Driven Executive Travel
              </h3>
              <ul className="space-y-4 mr-12">
                <li className="flex items-start">
                  <img src={Vector} alt="" className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#273270] font-medium">
                    Premium fleet of sedans, SUVs, and luxury vans for business leaders.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={Vector} alt="" className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#273270] font-medium">
                    Trained chauffeurs with corporate etiquette, confidentiality, and local knowledge.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={Vector} alt="" className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#273270] font-medium">
                    Flexible mobile hourly daily, monthly, or long-term contracts.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={Vector} alt="" className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#273270] font-medium">
                    Ideal for meetings, events, and client hosting when reliability and branding matter.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Airport Transfers Section */}
         {/* Airport Transfers – with your own icons + vertical line */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* LEFT – List */}
  <div className="relative">
    <h3 className="text-2xl md:text-3xl font-bold text-[#273270] mb-8">Airport Transfers</h3>

    {/* Vertical line – behind the icons */}
    <div className="absolute left-[29px] top-17 bottom-10 border-[#273270] w-[2px] bg-[#273270] " />

    <div className="space-y-12 lg:space-y-16">
      {/* 1 */}
      <div className="flex items-start gap-4">
        <div className="relative z-10 flex items-center justify-center bg-[#273270] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
          <img src={Hours} alt="24/7" className="w-full h-full object-contain invert brightness-0" />
        </div>
        <p className="font-[600] text-[#273270] pt-1 text-[19px]">
          24/7 pickups and drops for both employees and executives.
        </p>
      </div>

      {/* 2 */}
      <div className="flex items-start gap-4">
        <div className="relative z-10 flex items-center justify-center bg-[#273270] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
          <img src={Tracking} alt="Live flight tracking" className="w-full h-full object-contain invert brightness-0" />
        </div>
        <p className="font-[600] text-[#273270] pt-1 text-[19px]">
          Live flight tracking for timely adjustments.
        </p>
      </div>

      {/* 3 */}
      <div className="flex items-start gap-4">
        <div className="relative z-10 flex items-center justify-center bg-[#273270] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
          <img src={Group} alt="Meet & Greet" className="w-full h-full object-contain invert brightness-0" />
        </div>
        <p className="font-[600] text-[#273270] pt-1 text-[19px]">
          Meet & Greet services for international guests and VIPs.
        </p>
      </div>

      {/* 4 */}
      <div className="flex items-start gap-4">
        <div className="relative z-10 flex items-center justify-center bg-[#273270] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
          <img src={Taxi} alt="Flexible fleet" className="w-full h-full object-contain invert brightness-0" />
        </div>
        <p className="font-[600] text-[#273270] pt-1 text-[19px]">
          Flexible fleet — from single cars to group shuttles.
        </p>
      </div>

      {/* 5 */}
      <div className="flex items-start gap-4">
        <div className="relative z-10 flex items-center justify-center bg-[#273270] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
          <img src={Network} alt="Integrated mobility" className="w-full h-full object-contain invert brightness-0" />
        </div>
        <p className="font-[600] text-[#273270] pt-1 text-[19px]">
          Integrated with employee and executive mobility for end-to-end seamless travel.
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT – Airplane image */}
  <div className="flex justify-center lg:justify-end">
    <img
      src={Airport2}
      alt="Private jet and luxury car at airport"
      className="w-[623px] h-[596px] object-contain drop-shadow-lg"
    />
  </div>
</div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#273270]  mb-12">
        Business Benefits for Corporates
      </h2>

      {/* 4 Benefit Cards – 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  {/* Card 1 */}
  <div className="bg-[#F4F6FA] rounded-2xl p-6 border border-gray-100 ">
<h3 className="text-xl font-bold text-[#273270] mb-3 relative top-3.5 left-0 md:left-7 lg:left-7">
  Enhanced Productivity
</h3>

    <p className="text-[#273270] mb-4 relative top:3.5 lg:top-13.5 md:top-13.5 left-0 md:left-7 lg:left-7">
  Executives use commute time effectively.
</p>

    <div className="flex justify-end">
      <img src={Hardworking} alt="Hardworking" className="w-55 h-41 md:w-55 md:h-41 relative left-[23px] top-[25px]" />
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-[#F4F6FA] rounded-2xl p-6 border border-gray-100 ">
<h3 className="text-xl font-bold text-[#273270] mb-3 relative top-3.5 left-0 md:left-7 lg:left-7">
      Seamless Guest Experience</h3>
    <p className="text-[#273270] mb-4 relative top:3.5 lg:top-13.5 md:top-13.5 left-0 md:left-7 lg:left-7">
      Clients and partners receive professional.
    </p>
    <div className="flex justify-end">
      <img src={Thumb} alt="Handshake" className="w-55 h-41 md:w-55 md:h-41 relative left-[23px] top-[25px]" />
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-[#F4F6FA] rounded-2xl p-6 border border-gray-100">
<h3 className="text-xl font-bold text-[#273270] mb-3 relative top-3.5 left-0 md:left-7 lg:left-7">
      Reduced Operational Risk</h3>
    <p className="text-[#273270] mb-4 relative top:3.5 lg:top-13.5 md:top-13.5 left-0 md:left-7 lg:left-7">
      No more late arrivals, missed flights, or last-minute chaos.
    </p>
    <div className="flex justify-end">
      <img src={Clock} alt="Clock" className="w-55 h-41 md:w-55 md:h-41 relative left-[23px] top-[25px]"/>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-[#F4F6FA] rounded-2xl p-6 border border-gray-100">
<h3 className="text-xl font-bold text-[#273270] mb-3 relative top-3.5 left-0 md:left-7 lg:left-7">
      Improved Brand Image</h3>
    <p className="text-[#273270] mb-4 relative top:3.5 lg:top-13.5 md:top-13.5 left-0 md:left-7 lg:left-7">
      Premium mobility reflects professionalism and care.
    </p>
    <div className="flex justify-end">
      <img src={Plus1} alt="HeartHandshake" className="w-55 h-41 md:w-55 md:h-41 relative left-[23px] top-[25px]" />
    </div>
  </div>
</div>


      {/* Divider Dots */}
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="w-2 h-2 bg-[#273270] rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        
      </div>

      {/* The Viyagoo Edge */}
      <div className=" mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#273270] mb-4">
          The Viyagoo Edge
        </h2>
        <p className="text-[#273270] text-[19px] mx-auto leading-relaxed">
          By combining Executive Chauffeur Services with Airport Transfers, we provide corporates with a single, integrated mobility solution that ensures:
        </p>
      </div>

      {/* Bottom 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-md text-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
              <img src={Security} alt="" className="w-15 h-15" />
            </div>
          </div>
          <p className="text-[#273270] text-[16px]">
            Punctuality, professionalism, and safety.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-13 shadow-md text-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
              <img src={Airporticon} alt="" className="w-15 h-15" />
            </div>
          </div>
          <p className="text-[#273270] text-[16px]">
            A smooth travel chain — from airport arrival to boardroom meetings.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-6 shadow-md text-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
              <img src={Cargo} alt="" className="w-15 h-15"/>
            </div>
          </div>
          <p className="text-[#273270] text-[16px]">
            Better planning and control over corporate travel logistics.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl p-6 shadow-md text-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
              <img src={Changes} alt="" className="w-15 h-15" />
            </div>
          </div>
          <p className="text-[#273270] text-[16px]">
            Long-term value through cost efficiency and reliability.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Airport;
