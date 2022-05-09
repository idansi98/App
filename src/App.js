import "./App.css";
import LoginPage from "./registerAndLoginStuff/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./registerAndLoginStuff/SignUpPage";
import ChatPage from "./chatStuff/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<ChatPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
