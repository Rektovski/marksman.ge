import "../../styles/footerStyle.css";

export default function Footer() {
    return (
        <div className={'footer text-center'} onClick={()=>{window.location.replace('https://www.facebook.com/OtexRektovski/')}}>
            <div className={'bg-black'}>
                Marksman.ge
            </div>
            <div className={'developer-box'}>
                Developer - Otar Murmanishvili
            </div>
        </div>
    )
}