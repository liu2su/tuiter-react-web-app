function printlist(who){
    return (`<li class = "list-group-item">
                <div class = "row">
                    <div class="col-xxl-2 col-xl-2 col-lg-3">
                        <img src="${who.avatarIcon}" style="width:100%;margin-right:1px;border-radius:20px">
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-4">
                       ${who.userName} <i class="fa fa-check-circle"></i><p style=" color:rgb(110,118,125);font-size:11px;margin-bottom:1px">${who.handle}</p>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-3">
                        <button class="wd-right-bar-button btn-primary" style="border-radius:20px;margin-top:5px;">Follow</button>
                    </div>
                </div>
            </li>`);
}

function WhoToFollowListItem  (who) {
    return(`${who.map(printlist).join('')}`);
}

export default WhoToFollowListItem;