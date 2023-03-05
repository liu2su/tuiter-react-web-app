import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';
import Examples from "./components/examples";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path = "/examples" element = {<Examples/>}/>
                <Route path = "/hello" element = {<HelloWorld/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;
