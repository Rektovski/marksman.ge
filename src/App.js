import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./main/components/errorPage/ErrorPage";
import Header from "./main/components/mainComponents/Header";
import FirstLoading from "./main/components/otherComponents/FirstLoading";

export default function App() {
    return (
        <div className="App">
            <FirstLoading/> {/*Works only 1 second and disappears.*/}
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route path={'/footer'} element={''}></Route>
                    </Route>
                    <Route path={'*'} element={<ErrorPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}