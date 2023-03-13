import React from "react";

const Post1 = ({post = {
                    "avatar": "user2.png", "username": "bot2","handle" : "@bot2","timestamp": "2h","text": "This is the second post","img" : "post2.png",
                    "comment": 100,"forward": 100,"like": 500
                  }} ) =>{
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-2">
                <img width = {50} className="float-end rounded-3" src={`/images/${post.avatar}`}/>
            </div>
            <div className="col-6">
                <div className = "row">
                    <p className = "col-1">{post.username}</p>
                    <p className= "col-2">{post.handle} </p>
                    <p className = "col-1">  {post.time} </p>
                </div>
                <p>{post.text}</p>
                <div className = "row">
                    <img style={{ width: 400, height: 350 }} className="float-end rounded-3" src={`/images/${post.img}`}/>
                </div>
                <div className = "row">
                     <p className = "col-2">like:{post.like}</p>
                     <p className= "col-3">comment: {post.comment} </p>
                     <p className = "col-3">forward:  {post.forward} </p>
                </div>
            </div>
        </div>
    </li>
    );
}
export default Post1;