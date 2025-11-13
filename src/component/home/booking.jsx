// import React, { useState } from "react";
// import { IoChevronDown } from "react-icons/io5";
// // import HeroBanner from "../../assets/herobanner.png";
// import HeroBanner from "../../assets/herobanner.jpg";


// export const BookingFormBanner = () => {
//       const [tripType, setTripType] = useState("Airport");

//       return (
//             <section className="relative w-full ">
//                   {/* Background Image */}
//                   <img
//                         src={HeroBanner}
//                         alt="Banner"
//                         className="w-full h-[90vh] object-cover"
//                   />

//                   {/* Form Section */}
//                   <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
//                         <div className="bg-blue-100/60 p-6 sm:p-10  shadow-lg w-full">
//                               <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
//                                     {["Airport", "Local", "Outstation"].map(
//                                           (type) => (
//                                                 <label
//                                                       key={type}
//                                                       className="flex items-center gap-2  font-medium cursor-pointer"
//                                                 >
//                                                       <input
//                                                             type="radio"
//                                                             name="tripType"
//                                                             value={type}
//                                                             checked={
//                                                                   tripType ===
//                                                                   type
//                                                             }
//                                                             onChange={() =>
//                                                                   setTripType(
//                                                                         type
//                                                                   )
//                                                             }
//                                                             className="accent-[#0E1D3E]"
//                                                       />
//                                                       {type}
//                                                 </label>
//                                           )
//                                     )}
//                               </div>

//                               {/* Form Fields */}
//                               <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
//                                     {[
//                                           {
//                                                 label: "Name",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "From",
//                                                 placeholder: "Enter",
//                                           },
//                                           { label: "To", placeholder: "Enter" },
//                                           {
//                                                 label: "Pickup Date & Time",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "Seats",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "Vehicle Type",
//                                                 placeholder: "Enter",
//                                           },
//                                     ].map((field, i) => (
//                                           <div
//                                                 key={i}
//                                                 className="flex flex-col"
//                                           >
//                                                 <label className=" font-medium mb-1">
//                                                       {field.label}
//                                                 </label>
//                                                 <div className="relative">
//                                                       <input
//                                                             type="text"
//                                                             placeholder={
//                                                                   field.placeholder
//                                                             }
//                                                             className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                                       />
//                                                       <IoChevronDown className="absolute right-3 top-3 text-gray-400" />
//                                                 </div>
//                                           </div>
//                                     ))}
//                               </form>

//                               {/* Submit Button */}
//                               <div className="flex justify-center mt-8">
//                                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300">
//                                           Get Quote
//                                     </button>
//                               </div>
//                         </div>
//                   </div>
//             </section>
//       );
// };



import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios"; // 1. Axios को इम्पोर्ट करें
// import HeroBanner from "../../assets/herobanner.png";
import HeroBanner from "../../assets/herobanner.jpg";

// ** अपनी API का बेस URL यहाँ डालें **
const BASE_URL = "http://localhost:3010/"; 

export const BookingFormBanner = () => {
    // --- State Management ---
    const [tripType, setTripType] = useState("Airport");
    // सभी इनपुट फील्ड्स के लिए एक स्टेट ऑब्जेक्ट
    const [formData, setFormData] = useState({
        name: "",
        from: "",
        to: "",
        pickupDate: "",
        seats: "",
        vehicleType: "",
    });
    // लोडिंग और एरर को हैंडल करने के लिए स्टेट्स
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
        const [successMessage, setSuccessMessage] = useState("");



    // --- Handlers ---
    // इनपुट में कुछ भी लिखने पर formData स्टेट को अपडेट करता है
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // फॉर्म सबमिट होने पर यह फंक्शन चलेगा
    const handleSubmit = async (e) => {
        e.preventDefault(); // पेज को रीलोड होने से रोकता है
        setLoading(true);
        setError(null);
        setSuccessMessage(""); 

        // API को भेजने के लिए पेलोड तैयार करें
        const payload = {
            ...formData,
            location: tripType, // tripType की वैल्यू को 'location' में भेजें
            seats: Number(formData.seats) // सीटों को नंबर में बदलें
        };

        try {
            // Axios से POST रिक्वेस्ट भेजें
            const res = await axios.post(`${BASE_URL}api/user/quote`, payload);

            console.log("API Response:", res.data);
              setSuccessMessage("Quote submitted successfully!");
            // सफलता के बाद फ़ॉर्म को खाली कर दें
            setFormData({
                name: "",
                from: "",
                to: "",
                pickupDate: "",
                seats: "",
                vehicleType: "",
            });
             setTimeout(() => {
                setSuccessMessage("");
            }, 3000);

        } catch (err) {
            const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
            console.error("API Error:", errorMessage);
            setError(errorMessage);
        } finally {
            setLoading(false); // लोडिंग बंद करें
        }
    };

    // --- Form Fields Data ---
    // फ़ील्ड्स को मैनेज करना आसान बनाने के लिए एक ऐरे
    const formFields = [
        { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
        { label: "From", name: "from", type: "text", placeholder: "Enter pickup location" },
        { label: "To", name: "to", type: "text", placeholder: "Enter destination" },
        { label: "Pickup Date & Time", name: "pickupDate", type: "datetime-local", placeholder: "" },
        { label: "Seats", name: "seats", type: "number", placeholder: "Enter number of seats" },
        { label: "Vehicle Type", name: "vehicleType", type: "text", placeholder: "e.g., Sedan, SUV" },
    ];


    return (
        <section className="relative w-full ">
            {/* Background Image */}
            <img src={HeroBanner} alt="Banner" className="w-full h-[90vh] object-cover" />

            {/* Form Section */}
            <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
                <div className="bg-blue-100/60 p-6 sm:p-10  shadow-lg w-full">
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
                        {["Airport", "Local", "Outstation"].map((type) => (
                            <label key={type} className="flex items-center gap-2  font-medium cursor-pointer">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value={type}
                                    checked={tripType === type}
                                    onChange={() => setTripType(type)}
                                    className="accent-[#0E1D3E]"
                                />
                                {type}
                            </label>
                        ))}
                    </div>

                    {/* Form Fields: अब यह `handleSubmit` को कॉल करेगा */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                        {formFields.map((field) => (
                            <div key={field.name} className="flex flex-col">
                                <label className=" font-medium mb-1">{field.label}</label>
                                <div className="relative">
                                    <input
                                        type={field.type}
                                        name={field.name} // <-- state से जोड़ने के लिए ज़रूरी
                                        placeholder={field.placeholder}
                                        value={formData[field.name]} // <-- state से वैल्यू दिखाना
                                        onChange={handleChange} // <-- बदलने पर state को अपडेट करना
                                        required // <-- फ़ील्ड को ज़रूरी बनाना
                                        className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {field.type === 'text' && (
                                       <IoChevronDown className="absolute right-3 top-3 text-gray-400" />
                                    )}
                                </div>
                            </div>
                        ))}
                         {/* Submit Button */}
                        <div className="flex justify-center mt-8 lg:col-span-3 sm:col-span-2">
                             <button
                                type="submit" // <-- टाइप 'submit' होना चाहिए
                                disabled={loading} // <-- लोडिंग के समय डिसेबल
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300 disabled:bg-gray-400"
                            >
                                {loading ? "Submitting..." : "Get Quote"}
                            </button>
                        </div>
                    </form>
                        <div className="max-w-xl mx-auto mt-4">
                        {successMessage && (
                            <p className="text-center text-green-800 font-bold bg-green-200 border border-green-600 rounded-md p-3">
                                {successMessage}
                            </p>
                        )}
                        {error && (
                            <p className="text-center text-red-800 font-bold bg-red-200 border border-red-600 rounded-md p-3">
                                {error}
                            </p>
                        )}
                    </div>

                    {/* एरर दिखाने के लिए */}
                    {error && (
                        <p className="text-center text-red-600 font-bold mt-4">{error}</p>
                    )}
                </div>
            </div>
        </section>
    );
};