import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./main/components/errorPage/ErrorPage";
import Header from "./main/components/mainComponents/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Header/>}>

          </Route>
          <Route path={'*'} element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
