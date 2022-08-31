

import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import  { useRouter } from "next/router";

// import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid";

export default function SearchHeaderOptions(){
    const router = useRouter();
    return(

        
            
            <div className="flex space-x-8 select-none w-full mx-auto justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b-2 ">

                {/* <SearchHeaderOption  title="All" Icon={MagnifyingGlassIcon} />
                <SearchHeaderOption title="Images" Icon={PhotoIcon} /> */}


                <SearchHeaderOption  title="All" selected={router.query.searchType === "" ||  !router.query.searchType } />
                <SearchHeaderOption title="Images" selected={router.query.searchType === "image"} />
               
                
            </div>
        
        
    )
}