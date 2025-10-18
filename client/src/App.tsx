// import Chat from './components/Chat';
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import ShowPosts from './pages/ShowPosts';
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div className='w-screen h-screen grid grid-cols-10 grid-rows-1  '>
      <SideBar/>
      <div className="flex justify-center items-center flex-col col-start-3 col-end-11 row-start-1 row-end-2 border-[1px] border-black ">
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/listPosts" element={<ShowPosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
{/* You could add a route for your Chat component here */}
{/* Example: <Route path="/chat" element={<Chat />} /> */}