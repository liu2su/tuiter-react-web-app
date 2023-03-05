import {Link} from "react-router-dom";

function HelloWorld(){
    return(<div>
            <h1> Hello world!</h1>
            <Link to ="/examples"> examples </Link>
           </div>
            );
}

export default HelloWorld;