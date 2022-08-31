
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon , MicrophoneIcon , XMarkIcon } from "@heroicons/react/24/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeader(){
    const router = useRouter();
    const searchInputRef = useRef(null);
    function search(event){
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`);
    }
    return(
        <header className="sticky top-0 bg-white">
            <div className=" flex w-full p-6 items-center ">
            <Image 
            onClick={() => router.push("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
            width="120"
            objectFit='contain'
            height="40"
            className="cursor-pointer"
            />

            <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center ">
                <input type="text" defaultValue={router.query.term} ref={searchInputRef}  className="w-full focus:outline-none "/>
                <XMarkIcon className="h-7 text-gray-500 cursor-pointer sm:mr-2" onClick={()=>(searchInputRef.current.value = " ")}/>
                <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-600 pl-4 border-l-2 border-gray-300 mr-3"/>
                <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-600"/>
                <button type="submit" hidden onClick={search}></button>
            </form>

            <User  className="ml-auto whitespace-nowrap"/>




        </div>

        <SearchHeaderOptions/>
        <SearchHeaderOption/>

        

        

        </header>
    )
}