import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./main/components/errorPage/ErrorPage";
import Header from "./main/components/mainComponents/Header";
import FirstLoading from "./main/components/otherComponents/FirstLoading";
import AboutUs from "./main/components/otherComponents/AboutUs";
import Main from "./main/components/mainComponents/Main";
import Contacts from "./main/components/otherComponents/contact/Contacts";

export default function App() {
    return (
        <div className="App">
            <FirstLoading/> {/*Works only 1 second and disappears.*/}
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route path={'/'} element={<Main/>}></Route>
                        <Route path={'about'} element={<AboutUs/>}></Route>
                        <Route path={'/contacts'} element={<Contacts/>}></Route>
                        <Route path={'error'} element={<ErrorPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
