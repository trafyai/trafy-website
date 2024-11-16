'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import LandingImage from '@public/assets/Images/landing-page/hero/Image.svg'
import Ai from '@public/assets/Images/landing-page/hero/ai 1.svg'
import Article from '@public/assets/Images/landing-page/hero/article.svg'
import { UserAuth } from "@context/AuthContext";


const LandingHero = () => {
    const { user, logOut, loading } = UserAuth();
    const router = useRouter();

    function handleNavigate(){
        if(user){
            router.push('/courses')
        }
        else{
            router.push('/signup')
        }
    }
    return (
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-contents">
                        <div className="landing-hero-heading">
                            <h1>Become a Generative AI Expert</h1>
                        </div>
                        <div className="landing-hero-paragraph">
                            <p>Generative AI learning pathway for both coding and non-coding domains</p>
                        </div>
                        <div className="landing-hero-explore-btn" onClick={handleNavigate}>
                            Explore Pathway
                        </div>
                    </div>

                    <div className="landing-hero-bottom-container">
                        <Image src={LandingImage}/>
                    </div>
              </div>
              
            </div>
        </main>
    );
}

export default LandingHero;
