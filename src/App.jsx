import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <hr className="border " />
      <div className="md:flex container mx-auto px-5">
        <Blogs />
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
