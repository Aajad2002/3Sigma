import './App.css';
import logo from "./Assets/3sigma-logo (4) 2.png"
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange,MdOutlineWatchLater } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

function App() {
  return (
    <div className="bg-[#EBF0F4] h-[100vh]">
      <div className='flex justify-between'>
        <h1 className='text-[30px] font-bold line-height-[35.16px]'>Mangnabox private limited</h1>
        <img src={logo} alt='3sum logo' />
      </div>
      <div className='flex justify-between'>
        <h1 className='text-[24px]  font-bold'>Add new lead form</h1>
        <button className='text-red-500  font-semibold w-[104px] h-[42px] border-[1px] border-[#9099a0] rounded-[7px]'>Cancel</button>
      </div>
      <form>
        <div>
          <label htmlFor='leadName'>
            Lead name
            <span className='text-red-500'> *</span>
          </label>
          <div className=''>
            <IoPerson className='text-[#3FAEFD]' />
            <input type='text' id="leadName" placeholder='Enter lead name' required />
          </div>
        </div>
        <div>
          <label htmlFor='email'>
            Email
            <span className='text-red-500'> *</span>
          </label>
          <div className=''>
            <MdEmail className='text-[#3FAEFD]' />
            <input type='email' id="email" placeholder='Example@anyemail.com' required />
          </div>
        </div>
        <div>
          <label htmlFor='mobile'>
            Phone number
            <span className='text-red-500'> *</span>
          </label>
          <div className=''>
            <BsFillTelephoneFill className='text-[#3FAEFD]' />
            <input type='tel' id="mobile" placeholder='+918800688763' required />
          </div>
        </div>
        <div>
          <label htmlFor='address'>
            Address            
          </label>
          <div className=''>
            <TbWorld className='text-[#3FAEFD]' />
            <input type='text' id="address" placeholder='Gugurgram ,India' required />
          </div>
        </div>
        <div>
          <label htmlFor='sale'>
            Sale value            
          </label>
          <div className=''>
            <FaRupeeSign className='text-[#3FAEFD]' />
            <input type='text' id="sale" placeholder='50,000' required />
          </div>
        </div>
        <div>
          <label htmlFor='date'>
            Date        
          </label>
          <div className=''>
            <MdDateRange className='text-[#3FAEFD]' />
            <input type='text' id="date" placeholder='29 August 2023' required />
          </div>
        </div>
         <div>
          <label htmlFor='time'>
            Time        
          </label>
          <div className=''>
            <MdOutlineWatchLater className='text-[#3FAEFD]' />
            <input type='text' id="time" placeholder='20:21 pm' required />
          </div>
        </div>
        <div>
          <label htmlFor='options'>
            Options      
          </label>
          <div className=''>
            <TfiMenuAlt className='text-[#3FAEFD]' />
            <select id='options' className='w-72' placeholder='Select option' >
              <option>Select option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor='products'>
            Options      
          </label>
          <div className=''>
            <TfiMenuAlt className='text-[#3FAEFD]' />
            <select id='products' className='w-72' placeholder='Select option' >
              <option>Select Product</option>
              <option>Product 1</option>
              <option>Product 2</option>
              <option>Product 3</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor='note'>
            Note
          </label> <br/>
          <textarea id='note' placeholder='Enter note'></textarea>
        </div>
        <button className='bg-[#3A4B86] text-[white] font-bold'>Add lead</button>
      </form>
    </div>
  );
}

export default App;
