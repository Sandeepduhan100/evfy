import React from 'react'
import './hero.css'
import { Button } from "@/components/ui/button"
import { Sidebaraccordian } from '../sidebarAccordian/SidebarAccordian'

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

import Carousel from '../carousel/Carousel'
import Colorpallette from '../colorpalette/colorpalette'
// import Gallery from '../carousel2/Gallery'
// import MyCarousel from '../carousel2/Gallery'
  

const Hero = () => {
  const images = [
    '/teslamodel3.PNG',
    '/tesla3.PNG',
    '/teslamodel3cpoy.PNG',
    
  ]
  return (
    <div className='flex flex-col sm:flex-col md:flex-row gap-12 justify-items-stretch bg-white'>

<div className="carousel-container gap-5">  <Carousel images={images} /></div>


{/* <div className="carousal grid col-span-2 bg-slate-50">

<Carousel className='my-10  py-5'>
    <CarouselPrevious  />
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
    <CarouselItem className="pl-2 md:pl-4"><Image src='/teslamodel3.PNG' alt='tesla'width={500}height={500}></Image></CarouselItem>
  </CarouselContent>
  
  <CarouselNext />
</Carousel>

</div> */}

{/* <MyCarousel/> */}


<div className="sidebar m-3 bg-white w-96 ">
<span className=' text-sm bg-emerald-100  ml-3 px-2 py-1 text-blue-800 rounded-2xl'>NEW</span>
<div className="Card flex flex-col  ">
  <div className="CardHeader p-3">2021 Tesla Model 3</div>
    <div className="CardDescription text-lg font-normal   p-3">
      <span className='text-slate-400 mr-3'>VIN</span> JN1AZOCPOBTOO9448</div>
      </div>
      <div className="stars p-3">****</div>
    <div className="CardFooter p-3 text-2xl">$41,103</div>
    <hr />
    <div className="card m-3">
      <div className="CardHeader my-4 text-xl font-medium flex flex-row ">Color</div>
      <div className="palette-container flex ">
      <Colorpallette/>
      <span className='text-base ml-5'>Silver</span>
      </div>
      {/* <Button  variant="blue" className='m-4'>Order Now</Button> */}
      <button className='bg-blue-800 w-full rounded-md text-sm p-5 text-cyan-300 mt-9'>Order Now</button>
      
    </div>
    <span className='mx-5 my-4 text-lg text-slate-400   font-light flex flex-row'>Estimated within 16 Aug-23 Aug</span>
    <div className="details">
      <h3 className='text-xl p-6'>Tesla believes in accelerating the world transition to sustainable
        energy with electric cars.
      </h3>
      <div className="collection text-center">
      <button className='underline decoration-blue-700 text-blue-700 text-lg font-normal text-center'>View the Tesla collection</button>
      </div>
      <div className="sidebaraccordian p-5">
      <Sidebaraccordian/>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default Hero