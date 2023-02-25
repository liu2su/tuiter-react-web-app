import Item from "./PostSummaryItem.js";

function printpost1(Item){

    return(`
        <li class="list-group-item">
            <div class = "row">
                <div class="col-9">
                   <p style="color:rgb(110,118,125); font-size:12px;font-weight: bold;margin-bottom:3px;">${Item.topic}
                   </p>
                        <div style="display: flex;">
                           <h6 style="font-size:15px;margin-right:5px;font-weight: bold"> ${Item.userName}</h6>
                                <i class="fa fa-check-circle"></i>
                           <h6 style=" color:rgb(110,118,125);font-size:15px;margin-left:3px;"> - ${Item.time}</h6>
                        </div>
                      <p style="font-weight: bold;">${Item.title}
                      </p>
                </div>
                <div class="col-2">
                <img src="${Item.image}" style="width:180%; border-radius:10px;">
                </div>
            </div>
        </li>
    `);
}

const PostSummaryList = () => {
    return(`
        <ul class= "list-group">
            <li class="list-group-item">Test</li>
            ${Item.map(printpost1).join('')}
        </ul>

    `);

}

export default PostSummaryList;