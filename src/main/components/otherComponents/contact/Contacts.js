import Wave from "../../../special effects/Wave";
import Footer from "../../mainComponents/Footer";
import ContactCard from "./ContactCard";

export default function Contacts() {
    return (
        <div>
            <Wave/>
            <ContactCard/>
            <div style={{position: "absolute", bottom: 150, width: "100%", zIndex: 20}}>
                <Footer/>
            </div>
        </div>
    )
}