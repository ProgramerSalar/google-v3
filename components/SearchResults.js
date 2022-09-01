
import React from "react";
import  Parser  from "html-react-parser";

import PageinationButtons from "./PaginationButtons";


export default function SearchResults({results}){
    return(
        <dev className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
            <p className="text-gray-600 text-sm mb-5 mt-3 ">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
            {results.items.map((result)=>(
                <div key={result.link} className=" max-w-xl mb-8 p-3">
                    {/* <p> {Parser(result.htmlSnippet)}</p> */}
                    <div className="group">
                        <a className="text-sm truncate" href={result.link}>{result.formattedUrl}</a>
                        <a className="group-hover:underline decoration-blue-900"href={result.link}>
                            <h2 className="truncate text-xl font-medium text-blue-800"> {result.title}</h2>
                        </a>
                    </div>
                    <p className="text-gray-600 ">{Parser(result.htmlSnippet)}</p>

                </div>
            ))}

            <PageinationButtons/>
        </dev>
    )
}