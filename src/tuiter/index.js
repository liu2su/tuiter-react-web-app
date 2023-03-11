import {Link} from "react-router-dom";
function Tuiter() {
return(
    <div>
        <Link to = "/"> Lab</Link> | <Link to = "/hello"> hello </Link> | <Link to = "/tuiter"> tuiter</Link>
        <h1>Tuiter</h1>
    </div>
    );
}
export default Tuiter