import Image from "next/image"

interface ServiceCardProp{
    imgUrl : string,
    label : string,
    subtext: string,
}  


export default function ServiceCard({imgUrl,label,subtext} : ServiceCardProp){

 return(
    
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]
     shadow-3xl px-10 py-16">
        <div>
        <Image className=" w-11 h-11 justify-center flex items-center bg-coral-red
        rounded-full p-1 " src={imgUrl} width={24} height={24} alt="label"  ></Image>
        </div>
        <h3 className=" mt-5 font-palanquin text-3xl leading-normal font-bold">
            {label}</h3>
        <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray  ">{subtext}</p>
        


    </div>

 );
 
}







































