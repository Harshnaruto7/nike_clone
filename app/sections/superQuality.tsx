import { Button } from "../components/button";
import { arrowRight } from "../assets/icons";
import Image from "next/image";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col
      gap-10 w-full max-container ">

      <div className="flex flex-1 flex-col">
        <h2 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg
        ">
          We Provide You
          <span className="
          text-coral-red
          "> Super </span>
          <span className="text-coral-red"> 
           Quality </span> shoes
        </h2>
        <p className="
        mt-4 lg:max-w-lg info-text ">
          Discover stylish Nike arrivals ,quality comfort, and innovation for
          your active life.
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label="view details" iconUrl={arrowRight} />
        </div>
      
      </div>

      <div className=" flex-1 flex justify-center items-center">
        <Image src={shoe8} alt="view_shoe" height={522} width={570}></Image>
      </div>

    </section>
  );
}
