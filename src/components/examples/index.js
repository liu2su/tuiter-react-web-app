import {Link} from "react-router-dom";
import TuitLikesCounter from "./tuit-likes-counter"
import Classes from "./classes";
import Styles from './styles';
import EditProfileScreen from './EditProfileScreen'

const HelloWorld = () => {
return(
<div>
    <h1>Hello World!</h1>
    <Link to = "/hello"> hello </Link>
    <EditProfileScreen/>
    <TuitLikesCounter/>
    <Styles/>
    <Classes/>
 </div>
);
}
export default HelloWorld;