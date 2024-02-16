
import Image from "next/image";
import { offer } from "../assets/images";
import { Button } from "../components/button";
import { arrowRight } from "../assets/icons";


export default function SpecialOffer (){

    return (
    
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse
      gap-10 max-container">
        <div className="flex-1">
     <Image src={offer} width={773} height={687} alt="img_1" className="
         object-contain w-full" ></Image>
        </div>
        <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconUrl={arrowRight} />
          {/* <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'

            
          /> */}
          < ></>
        </div>
      </div>
   
        
      </section>
    
    
    
    
    
    
    
    );
    
    
    
    
    
    
    
    
    
    
    }