import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {

    const { title } = bookmark;
    return (
        <div className="border p-5 bg-white rounded-lg mt-2">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;