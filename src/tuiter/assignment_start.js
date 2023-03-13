import {Link} from "react-router-dom";
const Start = () => {
    return (<div>
                <h1> Assignment6 </h1>
                <Link to = "/labs">Labs</Link> |
                <Link to = "/tuiter">Tuiter</Link> |
                <Link to = "/challenge"> Challenge </Link>
            </div>
    );
};
export default Start;