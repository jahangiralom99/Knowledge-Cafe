import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="border md:w-[30%] bg-[#1111110D] p-3 rounded-lg">
      <div className="border-2 border-[#6047EC;] p-5 rounded-lg bg-[#6047EC19]">
        <h1 className="text-2xl font-semibold text-center">Spent time on read : {readingTime} min</h1>
      </div>
      <h1 className="text-center font-bold text-3xl ">
        Bookmarks page {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
