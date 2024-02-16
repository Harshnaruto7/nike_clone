"use client"
import React,{useState} from "react";
import { arrowRight } from "../assets/icons/index";
import  {bigShoe1} from "../assets/images/index"
import { Button } from "../components/button";
import { shoes,statistics } from "../constants/constants";
import Image from "next/image";
import ShoeCard from "../components/Shoecard";

export default function Hero() {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

    



  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div
       className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'
      >
        <p className="
        text-xl  font-montserrat text-red-400
        ">Our Summer Collection</p>
        <h1 className=" mt-10 font-palanquin text-8xl
        max-sm:text-[72px] max-sm:leading-[82] font-bold
        ">
          <span className="
          xl:bg-white xl:whitespace-nowrap relative z-10
          pr-10
          ">The New Arrival </span>
           <br/>
          <span className=" text-red-500 inline-block mt-3 mx-1"> Nike </span> shoes
        </h1>
        <p className="
        font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14
        sm:max-w-sm
        
        ">
          Discover stylish Nike arrivals ,quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className=" flex justify-start items-start flex-wrap w-full
        mt-20 gap-16
        ">
          {statistics.map((stat,index)=> (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-400 ">{stat.label}</p>

            </div>

          ))}

        </div>

       
       
      </div>
      {/* <div className="">
        <Image src={bigShoe1} alt="shoe_img"></Image>

      </div> */}

<div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center
        ">
           < Image src={bigShoeImg} alt="shoes_img" width={610} height={500} className=" object-contain relative z-10" / >
           
        </div>
        {/* <div className=" flex sm:gap-6 gap-4  absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6
         ">
          {shoes.map((shoes,index) =>(

          <div key={index}>
            <ShoeCard

            imgUrl={shoes}
            changeBigShoeImage={(newImageUrl) => {
              // Implement the logic to change the big shoe image URL here
              // For example, updating state or calling another function with newImageUrl
              console.log(newImageUrl); // Placeholder logic
            }}
              // {() => ()}
              bigShoeImg=""
            
            ></ShoeCard>


          </div>
 


          ) )}
        </div> */}




    </section>
  );
}
