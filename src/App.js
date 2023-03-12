import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import {Route,Routes} from "react-router";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world"
import Tuiter from "./tuiter";
import Start from "./tuiter/assignment_start"

function App() {
return (
    <BrowserRouter>
        <div Classname = "container" >
            <Routes>
                <Route index element = {<Start/>} />
                <Route path = "/labs" element = {<Labs/>} />
                <Route path = "/hello" element = {<HelloWorld/>} />
                <Route path = "/tuiter" element = {<Tuiter/>} />
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;
