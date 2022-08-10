import "../../styles/errorPageStyle.css";
import errorPageBackground from "../../images/error2.jpg";
import {useEffect, useState} from "react";

let intervalId;

export default function ErrorPage() {
    const [countDown, setCountDown] = useState(7);

    useEffect(()=>{
        if(countDown>1) {
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                setCountDown((prevState) => prevState - 1)
            }, 1000)
        } else {
            clearInterval(intervalId);
            window.location.replace('http://localhost:3000')
        }
        console.log(countDown);
    }, [countDown]);

    return (
        <div>
            <img
                className={'errorPageBackground'}
                src={errorPageBackground}
                alt={'error page background foto'}
            />
            <div className={'errorMessage'}>
                <div className={'css-typing'}>
                    <p>
                        Flags Down! ...
                    </p>
                    <p>
                        Error Code: 404 - Page not found ...
                    </p>
                    <p>
                        Fall back in {countDown}...
                    </p>
                </div>
            </div>
        </div>
    );
}