import React from "react";
import ReactIconLarge from "../images/react-icon-large.png";

export default function MainBg(){
    const bgStyle = {
        backgroundColor: "#282D35",
        fontFamily: "Inter",
        backgroundImage: `url(${ReactIconLarge})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(20% - 20px)",
        
    }

    const listElementStyle = {
        listStyleType: "square", // Change the bullet point style to 'square'
        fontFamily: 'Inter', // Change the font family of the list items
        fontSize: "16px",
        maxWidth: "400px",
        '::marker': {
            fontSize: '20px', // Adjust the font size of the bullet point
        },
    }

    
    const headerStyle = {
        fontSize: "39px",
    }
    return(
        <div class="container col-12 min-vh-100 " style={bgStyle}>
            <div class="col-12 d-flex flex-column justify-content-center align-items-start px-5" >
                <div>
                    <h1 class="text-white mt-5 mb-4 fw-bold" style={headerStyle}>Fun Facts About React!</h1>
                </div>
                
                <div class="text-white" style={listElementStyle}>
                    <ul>
                        <li class="my-2">Was first released in 2013</li>
                        <li class="my-2">Was originally created by Jordan Walke</li>
                        <li class="my-2">Has well over 100K stars on GitHub</li>
                        <li class="my-2">Is maintained by Facebook</li>
                        <li class="my-2">Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>   
            </div>
        </div>

        
        
    )
}