'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import shareBlack from '@public/assets/Images/course-page/hero-section/share.svg';
import shareWhite from '@public/assets/Images/course-page/hero-section/share-white.png';
import MasterClassEnquiryForm from '@components/common/auth/masterclass-form/masterClassEnquiry';
import Enroll from "@components/common/enroll/Enroll";
import Download from '@public/assets/Images/course-page/hero-section/download.svg'
import { useRouter } from "next/navigation";
import { UserAuth } from "@context/AuthContext";
import { useCart } from "@context/CartContext";

export default function CourseHero(props) {
    const [showShare, setShowShare] = useState(false);
    const [pageUrl, setPageUrl] = useState('window.location.href');
    const [showAlert, setShowAlert] = useState(false);
    const [enquiry, setEnquiry] = useState(false);
    const [demo, setDemo] = useState(false);
    const { user, logOut, loading } = UserAuth();
    const router = useRouter();

    const { setCartDetails } = useCart();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPageUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        if (showShare) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showShare]);

    function courseShare() {
        setShowShare(!showShare);
    }

    function showEnquiry() {
        if (user) {
            // If user is logged in, show the enquiry form
            setCartDetails(props);

            // Navigate to the enroll page
            router.push(`/enroll`);
        } else {
            // If user is not logged in, redirect to the login page
            router.push('/login'); // Assuming your login page is at /login
        }
    }

    function showDemo() {
        if (user) {
            // If user is logged in, show the demo form
            setDemo(!demo);
        } else {
            // If user is not logged in, redirect to the login page
            router.push('/login');
        }
    }

 

    return (
        <main>
            <div className="course-hero-section">
                <div className="course-hero-section-container">
                    <div className="course-hero-section-left">

                            <h1>{props.courseHeading}</h1>
                            <p>{props.courseDescription}</p>
   
                            <div className="course-download-btn" onClick={showDemo}>
                              Download Brochure
                              <Image src={Download}/>
                            </div>

                    </div>

                    <div className="course-hero-right">
                        <div className="course-hero-right-container">
                            <div className="course-hero-right-contents">
                                <p>Course Duration</p>
                                <h3>{props.duration}</h3>
                                <hr />
                            </div>

                            <div className="course-hero-right-contents">
                                <p>Start Date</p>
                                <h3>{props.startDate}</h3>
                                <hr />
                            </div>

                            <div className="course-hero-right-contents">
                                <p>Live Training</p>
                                <p>Career Guidance</p>
                                <p>Unlimited Resources</p>
                                <hr />
                            </div>

                            <div className="course-hero-right-contents-button">
                                <div className="pricing">
                                    <p>Now at <span style={{ textDecoration: 'line-through' }}>₹{props.initialRate}</span></p>
                                    <h2> ₹{props.fee}</h2>
                                </div>
                                <button onClick={showEnquiry}>Apply Now</button>
                            </div>

                        </div>
                    </div>
                    {demo && <MasterClassEnquiryForm title="Join Free Demo" courseFee={`${props.fee} `} />}

                </div>
            </div>
        </main>
    );
}
