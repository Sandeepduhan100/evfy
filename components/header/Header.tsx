import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CH, US } from 'country-flag-icons/react/3x2'
import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <header>
            <nav>
                <div className="navbar flex flex-end  justify-between ">
                  <div className="flex ml-5 gap-3">
                  <Link href='/' className='btn btn-ghost text-lg'>
                        <Image src='/logoevfy.png' alt="EVFY" width={200} height={50}></Image>
                    </Link>
                    <Accordion type="single" collapsible className="flex my-2  gap-3">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Find Ev Cars</AccordionTrigger>
                            <AccordionContent>
                               Ev Cars
                            </AccordionContent>
                        </AccordionItem>
                    
                        <AccordionItem value="item-2">
                            <AccordionTrigger>EV Guide</AccordionTrigger>
                            <AccordionContent>
                               Ev Guide
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                  </div>
                  <div className="flex">
                  <div className="country mt-2">
                  <Accordion type="single" collapsible className="">
                           <AccordionItem value="item-1 " className="">
                            
                             
                               <AccordionTrigger className="">US</AccordionTrigger>
                            
                               <AccordionContent>
                               <US title="United States" className="..." />
                              
                               </AccordionContent>
                               <AccordionContent>
                               <CH title="United States" className="..." />
                              
                               </AccordionContent>
                           </AccordionItem>
                       
                          
                       </Accordion>
                  </div>
                  <div className="flex mx-10 g-5">
                        
                       
                       <Button variant="ghost" className=" my-5 font-bold text-lg">SignUp/Login</Button>
   
                        </div>
                  </div>
                  
       
                </div>
            </nav>
        </header>
    )
}

export default Header