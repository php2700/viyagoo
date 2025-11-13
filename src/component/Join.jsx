import HeroBanner from '../assets/herobanner.jpg';
import { Helmet } from "react-helmet-async";
import Joinim from '../assets/join.png';
function Join() {
    return (
       <>
          <Helmet>
            <title>Join - VIYAGOO</title>
          </Helmet>
        <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
              {/* HERO SECTION */}
              <div className="relative w-full">
                <img
                  src={HeroBanner}
                  alt="Banner"
                  className="w-full h-[90vh] object-cover"
                />
                
              </div>
              <div className="max-w-5xl mx-auto mt-[28px]">
        <h1 className="text-[#273270] text-3xl md:text-4xl font-bold mb-4 text-center">
          Drive the Future with Viyagoo
        </h1>
        <p className="text-[#273270] text-[20px] leading-relaxed text-center">
          Viyagoo believes, our drivers are the heart of every journey. Join a team that values professionalism, reliability, 
          and dedication — and rewards it. With consistent trips, competitive payouts, and fair incentives, you’ll earn more 
          while driving smarter. Our operations are designed to make your experience effortless, from transparent scheduling 
          to full-time driver support.
          <br />
          Drive in comfort, work on your terms, and be part of a brand that’s shaping the future of mobility. 
          With Viyagoo, you don’t just drive — you move forward, confidently and with purpose.
        </p>
      </div>

      {/* ===== Form Section ===== */}
     <div className="max-w-5xl mx-auto mt-10 bg-[#EAF3FF] rounded-[25px] p-10 shadow-sm rounded-tl-[115px] rounded-br-[115px]">
  <form className="grid grid-cols-1 md:grid-cols-3 gap-8 p-[62px]">
    {/* Name */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">Name</label>
      <input
        type="text"
        placeholder="Enter"
        className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
      />
    </div>

    {/* Phone No */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">Phone no</label>
      <input
        type="tel"
        placeholder="+91 9999999999"
        className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
      />
    </div>

    {/* City Dropdown */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">City</label>
      <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]">
        <option value="" >Enter</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangalore">Bangalore</option>
      </select>
    </div>

    {/* Email Id */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">Email Id</label>
      <input
        type="email"
        placeholder="eg@gmail.com"
        className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
      />
    </div>

    {/* Alternate phone number */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">
        Alternate phone number
      </label>
      <input
        type="tel"
        placeholder="+91 9999999999"
        className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
      />
    </div>

    {/* Vehicle Type Dropdown */}
    <div className="flex flex-col">
      <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">Vehicle Type</label>
      <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white  text-[#B7B7B7] font-medium pl-[25px]">
        <option value="">Enter</option>
        <option value="Truck">Truck</option>
        <option value="Van">Van</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
      </select>
    </div>

    {/* Additional Info + Submit Button in same row */}
    <div className="flex flex-col md:flex-row items-end md:col-span-3 gap-6 md:gap-24 lg:gap-24">
      {/* Additional Info Dropdown */}
      <div className="flex flex-col w-full md:w-[253px]">
        <label className="text-[#0E1D3E] font-[660] mb-2 text-[18px]">
          Additional Info
        </label>
        <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]">
          <option value="">Enter</option>
          <option value="Delivery Partner">Delivery Partner</option>
          <option value="Fleet Owner">Fleet Owner</option>
          <option value="Driver">Driver</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center w-full md:w-auto">
        <button
          type="submit"
          className="bg-[#3F98FF] text-white px-10 py-3 rounded-full hover:bg-[#152a6b] transition w-[156px] h-[54px] font-[700]"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</div>




      {/* ===== Attach Vehicle Section ===== */}
      <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={Joinim}
            alt="truck"
            className=" w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#273270] text-2xl md:text-[46px] font-bold mb-2 md:w-[450px] lg:w-[505px]">
            Got a Vehicle ? and want to work with Routmatic.
          </h2>
          <h2 className="text-[#273270] text-[24px] leading-relaxed mb-5 mt-[48px] font-[700] lg:w-[416px] md:w-[400px]">
We are happy to get in touch with you and collaborate with you regarding your vehicle          </h2>
          <button className="bg-[#3F98FF] text-white px-11 py-4 rounded-[19px] font-semibold hover:bg-[#152a6b] transition mx-auto block">
  Attach a vehicle
</button>

        </div>
      </div>

      {/* ===== Footer Title ===== */}
      <h3 className="text-[#273270] text-3xl md:text-4xl font-bold mb-4 text-center">
        Benefits for you
      </h3>

        </section>
        </>
    )

}
export default Join;