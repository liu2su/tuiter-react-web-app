import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
    <li class="list-group-item"><span style="font-weight: bold"> Who to follow</span></li>
    ${WhoToFollowListItem(who)}
    </ul>
    `);
}
export default WhoToFollowList;