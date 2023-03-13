import React from "react";
import Post1 from "./post1";
import Post2 from "./post2"
import postArray from "./post.json"

const Home = () => {
    return (
        <div className = "container">
            <ul className = "list=group">
                <Post1/>
                <Post2/>
            </ul>
        </div>

    );
}
export default Home;