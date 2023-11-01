import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks,handleMarkBtn }) => {
  const {
    cover,
    author,
    author_img,
    title,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="border rounded-xl mt-8">
      <img src={cover} alt="" />
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img className="w-24" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="flex items-center border p-3 rounded-lg bg-slate-100 gap-3"
          >
            {reading_time} min read
            <FaBookmark className=" border"></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-3">{title}</h1>
      <p className="font-bold mt-4">
        #{hashtags[0]} #{hashtags[1]}
      </p>
      <button onClick={()=>handleMarkBtn(reading_time)} className="text-[#6047EC] font-bold border mt-5 p-4 underline">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkBtn: PropTypes.func.isRequired,
};
export default Blog;
