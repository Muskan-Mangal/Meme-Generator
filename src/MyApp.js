/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */
import React from "react"
import MemeGenerator from "./components/MemeGenerator"

function MyApp(){
    return(
        <div>
            <MemeGenerator/>

        </div>
        
    )
}
export default MyApp