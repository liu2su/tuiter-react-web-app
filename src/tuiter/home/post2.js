import React from "react";

const Post2 = ({post = {"avatar": "user1.png", "username": "bot1","handle" : "@bot1","time": " -1h","text": "This is the first post","img" : "post1.png","comment": 200,"forward": 300,"like": 1000}} ) =>{
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
export default Post2;