import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);
    return (
        <div>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;