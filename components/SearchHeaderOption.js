
import React from "react";
import { useRouter } from "next/router";
// import SearchHeaderOptions from "./SearchHeaderOptions";


                                                //Icon 
export default function SearchHeaderOption({title ,selected }){
    const router = useRouter();
    function selectTab(title){
        router.push(`/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`)
        

    }
    return(
        <div onClick={()=>selectTab(title)}
        className={`flex items-center space-x-1 border-b-0  border-transparent hover:text-blue-600 cursor-pointer hover:border-blue-700 pb-3 ${selected && "text-blue-500 border-blue-500"}`}>
            {/* <Icon/> */}
           
            

            <p>{title}</p>
        </div>
    )
}