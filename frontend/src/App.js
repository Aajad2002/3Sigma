import "./App.css";
import logo from "./Assets/3sigma-logo (4) 2.png";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange, MdOutlineWatchLater } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <div className="bg-[#EBF0F4]">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-extrabold line-height-[35.16px]">
          Mangnabox Private Limited
        </h1>
        <img
          src={logo}
          alt="3sum logo"
          className="w-auto h-auto max-w-full max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-32"
        />
      </div>

      <div className="flex justify-between w-[90%] mx-auto mt-10">
        <h1 className="text-[24px] font-bold">Add new lead form</h1>
        <button className="text-red-500  font-semibold w-[104px] h-[42px] border-[1px] border-[#9099a0] rounded-[7px]">
          Cancel
        </button>
      </div>
      <form className="max-w-7xl mx-auto p-4 mt-28">
        {/* Lead Name */}
        <div className="mb-4">
          <label
            htmlFor="leadName"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Lead Name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full">
              <IoPerson className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="text"
                id="leadName"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="Enter lead name"
                required
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <MdEmail className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="email"
                id="email"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="Example@anyemail.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <BsFillTelephoneFill className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="tel"
                id="mobile"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="+918800688763"
                required
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          {/* Address Label */}
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Address
          </label>

          {/* Address Input */}
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full">
              <TbWorld className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="text"
                id="address"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="Gurgaon, India"
                required
              />
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-[40vh] mt-2 overflow-hidden rounded-md">
            <MapContainer
              center={{ lat: 28.457523, lng: 77.026344 }}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                // Set the map tile layer using OpenStreetMap
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>
        </div>

        {/* Sale Value */}
        <div className="mb-4">
          <label
            htmlFor="sale"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Sale Value
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <FaRupeeSign className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="text"
                id="sale"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="50,000"
                required
              />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Date
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <MdDateRange className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="text"
                id="date"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="29 August 2023"
                required
              />
            </div>
          </div>
        </div>

        {/* Time */}
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Time
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <MdOutlineWatchLater className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <input
                type="text"
                id="time"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="20:21 pm"
                required
              />
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="mb-6">
          <label
            htmlFor="options"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Options
          </label>
          <div className="flex items-center mt-4">
            <div className="relative flex items-center w-full gap-4">
              <TfiMenuAlt className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <select
                id="options"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="Select option"
              >
                <option>Select option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-10">
          <label
            htmlFor="products"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Products
          </label>
          <div className="flex items-center mt-1">
            <div className="relative flex items-center w-full mt-4">
              <TfiMenuAlt className="text-[#3FAEFD] absolute left-3 transition-all  hover:text-lg" />
              <select
                id="products"
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                placeholder="Select Product"
              >
                <option>Select Product</option>
                <option>Product 1</option>
                <option>Product 2</option>
                <option>Product 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mb-4">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700 ml-2"
          >
            Note
          </label>
          <textarea
            id="note"
            className="pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full h-40 mt-4"
            placeholder="Enter note"
          ></textarea>
        </div>

        {/* Add Lead Button */}
        <div className="mb-4 mt-44">
          <button className="bg-[#3A4B86] text-white font-bold py-3 px-4 rounded w-full">
            Add Lead
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
