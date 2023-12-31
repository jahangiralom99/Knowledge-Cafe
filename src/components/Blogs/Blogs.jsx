/* eslint-disable no-unused-vars */
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmarks,handleMarkBtn}) => {
    const [allBlogs, setAllBlogs] = useState([]);

    useState(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    },[])

    return (
        <div className="md:w-[70%] ">
            <h1 className="text-4xl text-center ">Blog page {allBlogs.length}</h1>
            {
                allBlogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkBtn ={handleMarkBtn}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkBtn: PropTypes.func.isRequired,
}

export default Blogs;