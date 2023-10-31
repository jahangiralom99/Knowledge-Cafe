/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  // eslint-disable-next-line no-unused-vars
  const { cover, author, author_img, title, posted_date, reading_time, hashtags } = blog;
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
          <button className="flex border p-3 rounded-lg bg-slate-100">
            {reading_time} min read{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.593 3.32188C18.693 3.44988 19.5 4.39888 19.5 5.50688V20.9999L12 17.2499L4.5 20.9999V5.50688C4.5 4.39888 5.306 3.44988 6.407 3.32188C10.1232 2.89051 13.8768 2.89051 17.593 3.32188Z"
                stroke="#111111"
                stroke-opacity="0.6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
          </div>
          <h1 className="text-3xl font-bold mt-3">{title}</h1>
          <p className="font-bold mt-4">#{hashtags[0]} #{hashtags[1]}</p>
       <button className="text-[#6047EC] font-bold border mt-5 p-4 underline">Mark as read</button>  
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array.isRequired,
};
export default Blog;
