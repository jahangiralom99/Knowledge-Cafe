/* eslint-disable no-unused-vars */
import { useState } from "react";

const Blogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useState(() => {
        fetch("/public/blog.json")
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    },[])

    return (
        <div>
            <h1>Blog page</h1>
        </div>
    );
};

export default Blogs;