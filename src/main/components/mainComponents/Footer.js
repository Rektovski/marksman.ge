import "../../styles/footerStyle.css";

export default function Footer() {
    return (
        <div className={'footer text-center'}>
            <div className={'bg-black'}>
                Marksman.ge
            </div>
            <a
                href={"https://www.facebook.com/OtexRektovski"}
                target={"_blank"}
                rel={"noreferrer"}
                className={'developer-box'}>
                Developer: "Otar Murmanishvili"
            </a>
        </div>
    )
}