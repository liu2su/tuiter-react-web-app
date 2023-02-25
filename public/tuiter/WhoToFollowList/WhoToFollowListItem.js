function printlist(who){
    return (`<li class = "list-group-item"> ${who.userName}</li>`);
}

function WhoToFollowListItem  (who) {
    return(`${who.map(printlist).join('')}`);
}

export default WhoToFollowListItem;