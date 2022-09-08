import {useEffect, useState} from 'react';
import "../../styles/aboutUsStyle.css";
import aboutUsLogo from "../../images/aboutUsLogo.png";
import aboutUsLogoMobile from "../../images/aboutUsLogoMobile.png";
import Smoke from "../../special effects/Smoke";
import Footer from "../mainComponents/Footer";

export default function AboutUs() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => setWindowSize(getWindowSize());
        window.addEventListener('resize', handleWindowResize);
        console.log('AboutUs.js');
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className={'aboutUs'}>
            {windowSize.innerWidth >= 720 && <Smoke/>}
            <div>
                <img
                    className={"aboutUs-Image"}
                    src={windowSize.innerWidth >= 720 ? aboutUsLogo : aboutUsLogoMobile}
                    alt={'about us logo'}
                />
            </div>
            <div className={'text-light p-5 about-us-container'}>
                <h1 style={{fontWeight: "bolder"}} className={(windowSize.innerWidth > 720 && 'text-center') || ""}>
                    ჩვენს შესახებ
                </h1>
                <p className={'about-us-text'}>
                    პროექტი მარკსმენი არის სამოქალაქო სამხედრო პრაქტიკული ბლოგი, რომლის მიზანია ადამიანებში სამხედრო
                    თემატიკაზე, იარაღებზე, თავდაცვაზე და სხვადასხვა მსგავს თემატიკაზე ცოდნის ამაღლება. გუნდი
                    დაკომპლექტებულია ყოფილი და მოქმედი სამხედროებით და მისი მთავარი ფუნქცია საზოგადოებაში განათლების დონის
                    ამაღლებას მოიცავს.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}