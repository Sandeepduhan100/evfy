
import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BiTachometer } from "react-icons/bi";
import { IoIosThermometer } from "react-icons/io";
import TableComponent from '@/components/footer/footertable'
import { Button } from '../ui/button';



const Footer = () => {
  return (<>
    <div className='my-5 p-10'>
      <h1 className='p-4'>About this car </h1>
      <div className="about-this  flex flex-col sm:flex-row  font-normal text-xl my-6 m-4 flex justify-between">
        <p className='flex gap-4'>
          <span className='text-blue-700'><BsFuelPump /></span>
          Diesel Fuel
        </p>
        <p className='flex gap-4'>
          <span className='text-blue-700'><TbAutomaticGearbox />
          </span>
          Automatic Transmission
        </p>
        <p className='flex gap-4'>
          <span className='text-blue-700'>< BiTachometer />
          </span>
          11,594 Miles
        </p>
        <p className='flex gap-4'>
          <span className='text-blue-700'><  IoIosThermometer />
          </span>
          3.5L Displacement
        </p>
      </div>
    </div>

    <div className="footer-details">

    </div>


    <div className="footer-details m-10 p-4">
      <TableComponent />
      <div className="footer-button flex justify-center p-10">
        <Button variant="outline" className='flex  justify-center p-9 text-blue-700'>Show All Specifications</Button>
      </div>
    </div>
  </>
  )
}

export default Footer