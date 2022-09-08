import {Container, ProgressBar} from "react-bootstrap";
import {useEffect, useState} from "react";
import mainLogo from "../../images/mainLogo.jpg";
import "../../styles/firstLoading.css";

let intervalId;
const timeWhileLoading = 1; // seconds
const timeWhileLoadingMiliSeconds = 1000 * timeWhileLoading; // ms

export default function FirstLoading() {
    const [countDown, setCountDown] = useState(0);
    const [display, setDisplay] = useState('');

    useEffect(() => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            countDown < timeWhileLoading
                ? setCountDown((prevState) => prevState + (timeWhileLoading / 100))
                : clearInterval(intervalId);
        }, timeWhileLoading / 100);
        console.log('FirstLoading.js')
    }, [countDown]);

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none')
        }, timeWhileLoadingMiliSeconds)
    }, [])

    return (
        <div style={{display: display}} className={'firstLoading'}>
            <img
                style={{
                    animation: "spinner-border",
                    animationDuration: "1s",
                    height: "15rem",
                    width: "15rem",
                }}
                className={'loading-image'}
                src={mainLogo}
                alt={'Main Logo'}
            />
            <Container>
                <ProgressBar
                    animated
                    now={(countDown / timeWhileLoading) * 100}
                    variant={'dark'}
                />
            </Container>
        </div>
    )
}