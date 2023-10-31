/* eslint-disable no-unused-vars */
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useState(() => {
        fetch("/public/blog.json")
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    },[])

    return (
        <div className="md:w-[70%] ">
            <h1 className="text-4xl text-center ">Blog page {allBlogs.length}</h1>
            {
                allBlogs.map((blog) => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;