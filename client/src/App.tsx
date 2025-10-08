import Chat from './components/Chat';
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import ShowPosts from './pages/ShowPosts';
import "./App.css";

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/listPosts" element={<ShowPosts />} />
      </Routes>
    </div>
  );
}

export default App;
{/* You could add a route for your Chat component here */}
{/* Example: <Route path="/chat" element={<Chat />} /> */}