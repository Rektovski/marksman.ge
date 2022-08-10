import "../../styles/errorPageStyle.css";
import errorPageBackground from "../../images/error2.jpg";

export default function ErrorPage() {
    return (
        <div className={'/*errorPageMainElementStyle text-center*/'}>
            <img
                className={'errorPageBackground'}
                src={errorPageBackground}
                alt={'error page background foto'}
            />
            <div className={'errorMessage css-typing'}>
                <p>
                    Flags Down! ...
                </p>
                <p>
                    Error Code: 404 - Page not found ...
                </p>
                <p>
                    Check the link ...
                </p>
            </div>
        </div>
    );
}