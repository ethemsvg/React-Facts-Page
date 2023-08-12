import React from "react"
import reactlogo from "../images/react-logo.png"

export default function Navbar(){
    const navbarStyle = {
        fontFamily: "Inter",
        color: "#08ccfc",
        width: "122px",
        
    };

    const backgroundStyle = {
        backgroundColor: "#21222A",
    }
    return(
        <nav>
            <div class=" d-flex justify-content-center align-items-center py-4" style={backgroundStyle}>
                <div class="col-12  d-flex  align-items-center justify-content-between " >
                    <div class="d-flex justify-content-center align-items-center px-5">
                        <img src={reactlogo} width="40px"></img>
                        <h3 class="fw-bold px-2 mt-2" style={navbarStyle}>ReactFacts</h3>
                    </div>
                    <div class="px-5">
                        <h4 class="font-family-inter text-white">React-Project-1</h4>
                    </div>
                </div>
            </div>
            
            
        </nav>
    )
}