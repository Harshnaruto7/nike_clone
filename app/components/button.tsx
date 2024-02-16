
import Image from "next/image";


interface buttonProp{
    label:string,
    iconUrl:string,
}

export function Button({label,iconUrl}:buttonProp){

    return(
        
        <button className="
        flex justify-center items-center gap-2  px-7 py-4 border font-montserrat 
        text-lg leading-none bg-red-500 rounded-full text-white
         border-red-500

        ">
          {label}


           <Image alt="image" src={iconUrl}></Image>
        </button>
        





    );


}
































