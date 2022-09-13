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
                        <Copy size={50} className={'copy-icon mx-4'} onClick={() => {
                            window.alert(`Marksman's gmail is copied!`);
                            document.getElementById('marksmanGmail').select();
                        }}/>
                    </div>
                    <div className={'d-flex justify-content-around align-items-center my-3'}>
                        <a
                            href={'https://www.facebook.com/Geomarksman'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Facebook size={50}
                                      className={'social-icons1'}
                            />
                        </a>
                        <a
                            href={'https://bit.ly/3cZP6d7'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Instagram size={50}
                                       className={'social-icons2'}
                            />
                        </a>
                        <a
                            href={'https://bit.ly/3Qw9oZA'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Twitter size={50}
                                     className={'social-icons3'}
                            />
                        </a>
                        <a
                            href={'https://bit.ly/3QDdq2s'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Youtube size={50}
                                     className={'social-icons4'}
                            />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}