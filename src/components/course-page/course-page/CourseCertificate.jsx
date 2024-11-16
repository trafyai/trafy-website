import React from "react";
import Image from "next/image";


export default function CourseCertificate(props){
    return(
        <main>
           <div className="course-certificate" >
                <div className="course-certificate-container">
                {props.image &&<div className="course-certificate-contents">
                    <div className="course-certificate-image">
                           <Image src={props.image} alt="" />
                        </div>
                        <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>{props.heading}</h2></div>
                            <p>{props.description}</p>
                        </div>
                    </div>}
                    <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>{props.heading}</h2></div>
                            <p>{props.description}</p>
                        </div>
                </div>
            </div>
        </main>
    )
}