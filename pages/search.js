

import Head  from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";

export default function search(){
    return(
        <div>
            <Head>
                <title>
                    Search Page
                </title>

            </Head>

            {/* search header  */}
            <SearchHeader/>
            

            {/* search result  */}
        </div>
    )
}