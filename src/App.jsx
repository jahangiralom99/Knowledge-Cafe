import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {


  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const isExist = bookmarks.find(bookmark => bookmark.id === blog.id);
    if (!isExist) {
      const previousBookmarks = ([...bookmarks, blog]);
      setBookmarks(previousBookmarks)
    }
    else {
      return alert("Already exist bookmark") 
    }
    
  }

  const handleMarkBtn = (time) => {
    setReadingTime(readingTime + time);
  }



  return (
    <>
      <Header />
      <hr className="border " />
      <div className="md:flex container mx-auto px-5 gap-3 mt-12">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkBtn={handleMarkBtn}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
