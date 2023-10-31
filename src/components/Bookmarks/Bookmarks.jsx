import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
    return (
        <div className="">
            <h1 className="text-center font-bold">Bookmarks page</h1>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;