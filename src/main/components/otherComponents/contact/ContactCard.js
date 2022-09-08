import "../../../styles/contactsStyle.css";
import {Card} from "react-bootstrap";
import {AiFillFacebook as Facebook, AiFillYoutube as Youtube, AiOutlineCopy as Copy} from "react-icons/ai";
import {FaInstagramSquare as Instagram, FaTwitter as Twitter} from "react-icons/fa";

export default function ContactCard() {
    return (
        <div className={'makeCardCenterAndVisible'}>
            <Card>
                <Card.Header className={'text-center'}>
                    <Card.Title>
                        Marksman Socials
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className={'d-flex justify-content-around align-items-center'}>
                        <div id={'marksmanGmail'}>
                            {`Marksmancommunity5@gmail.com`}
                        </div>
                        <Copy size={40} className={'copy-icon mx-4'} onClick={()=>{
                            window.alert(`Marksman's gmail is copied!`);
                            document.getElementById('marksmanGmail').select();
                        }}/>
                    </div>
                    <div className={'d-flex justify-content-around align-items-center my-3'}>
                        <Facebook size={40}
                                  className={'social-icons'}
                                  onClick={()=>window.location.replace('https://www.facebook.com/Geomarksman')}
                        />
                        <Instagram size={40}
                                   className={'social-icons'}
                                   onClick={()=>window.location.replace('https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmarksmancommunity%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR2w_BLwHSQeUW_Gs2xD5bEkiJ1QZ9Ki6y2MctDJO48-m7F_hWk3HJ_mxxE&h=AT1fc2YSYuQ4tHJl-j20RHEftu8x_Pcbnd7E5DMoGRdMwnBkgo0pKPd7G_YAvIGzZIFZU2wgrE6eSsrs3kUfvXeWTkGRD3qwQhHq1jYQ0cVLDfdUEWoA2sUexfl-_w')}
                        />
                        <Twitter size={40}
                                 className={'social-icons'}
                                 onClick={()=>window.location.replace('https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCvFIpoJZtT2I1MALQ1iRLNQ%3Ffbclid%3DIwAR04EDv6hcQIbatdqPRz5uuG_X66gwI6ImfBMkhICZ7AZpstBVqseWHniHM&h=AT1fc2YSYuQ4tHJl-j20RHEftu8x_Pcbnd7E5DMoGRdMwnBkgo0pKPd7G_YAvIGzZIFZU2wgrE6eSsrs3kUfvXeWTkGRD3qwQhHq1jYQ0cVLDfdUEWoA2sUexfl-_w')}
                        />
                        <Youtube size={40}
                                 className={'social-icons'}
                                 onClick={()=>window.location.replace('https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fmarksmanpwm%3Fs%3D11%26t%3DWV5I1ACCF9q1TzF3wFBMFw%26fbclid%3DIwAR2ZjCuQH1vLf4F9ZYedSR6sMNQfIq9hyPi8Yh4JcasH7Xu-f515H50XF_g&h=AT22qYdHxCf9V-J-64qCXUdLaJ_84tjWYOYi92PbViObvUcPNMlyn2GEDJKyv-mK-vmIz9nTH-ampbJru6KFDRbxsV0bPlwFMfatpQGJWHWiqEpD3GnoxdDbNmWQHcLykpmq-HA7txu3Q1g')}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}