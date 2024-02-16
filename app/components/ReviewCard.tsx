
import Image from "next/image";
import { star } from "../assets/icons";

interface ReviewCardProp{
    imgUrl:string,
    customerName:string,
    rating:number,
    feedback:string,
    key:string,





}



export default function ReviewCard({imgUrl,customerName,rating,feedback}:ReviewCardProp) {

    return(

       <section className=" flex justify-center items-center flex-col">
          
       <Image src={imgUrl} alt="customer" className="rounded-full object-cover
       w-[120px] h-[120px] " height={120} width={120} ></Image>
       <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
         <div className="mt-3 flex justify-center items-center gap-2.5">
            <Image src={star} alt="star" width={24} height={24} className="object-contain
            m-0"></Image>
            <p>({rating})</p>
         </div>
         <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
       </section>





    );







}


































